import { createHmac, scrypt as scryptCallback, timingSafeEqual } from 'crypto';
import { promisify } from 'util';
import { NextRequest } from 'next/server';

const scrypt = promisify(scryptCallback);
const TOKEN_TTL_SECONDS = 60 * 60 * 8;
export type Role = 'admin' | 'operator' | 'viewer';
export interface Principal { email: string; role: Role; }

function secret() {
  const value = process.env.AUTH_JWT_SECRET;
  if (!value || value.length < 32) throw new Error('AUTH_JWT_SECRET must be at least 32 characters');
  return value;
}
function sign(value: string) { return createHmac('sha256', secret()).update(value).digest('base64url'); }

export function issueToken(principal: Principal) {
  const payload = Buffer.from(JSON.stringify({ ...principal, exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

export function getPrincipal(request: NextRequest): Principal | null {
  try {
    const token = request.headers.get('authorization')?.match(/^Bearer (.+)$/)?.[1];
    if (!token) return null;
    const [payload, signature] = token.split('.');
    if (!payload || !signature || !timingSafeEqual(Buffer.from(sign(payload)), Buffer.from(signature))) return null;
    const decoded = JSON.parse(Buffer.from(payload, 'base64url').toString()) as Principal & { exp: number };
    if (!decoded.email || !['admin', 'operator', 'viewer'].includes(decoded.role) || decoded.exp <= Date.now() / 1000) return null;
    return { email: decoded.email, role: decoded.role };
  } catch { return null; }
}

export function requireRole(request: NextRequest, roles: Role[]): Principal | null {
  const principal = getPrincipal(request);
  return principal && roles.includes(principal.role) ? principal : null;
}

export async function verifyAdminCredentials(email: string, password: string) {
  const configuredEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;
  if (!configuredEmail || !passwordHash) throw new Error('Admin authentication is not configured');
  const [salt, expected] = passwordHash.split(':');
  if (!salt || !expected || email.trim().toLowerCase() !== configuredEmail) return false;
  const derived = (await scrypt(password, salt, 64) as Buffer).toString('hex');
  return expected.length === derived.length && timingSafeEqual(Buffer.from(expected), Buffer.from(derived));
}
