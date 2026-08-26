import { NextRequest, NextResponse } from 'next/server';
import { issueToken, verifyAdminCredentials } from '@/server/auth';

export const runtime = 'nodejs';
const attempts = new Map<string, number[]>();

export async function POST(request: NextRequest) {
  const key = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((time) => time > now - 15 * 60 * 1000);
  if (recent.length >= 10) return NextResponse.json({ success: false, error: { code: 'RATE_LIMITED', message: 'Too many login attempts' } }, { status: 429 });
  attempts.set(key, recent);
  try {
    const body = await request.json() as { email?: unknown; password?: unknown };
    if (typeof body.email !== 'string' || typeof body.password !== 'string' || !body.email.trim() || !body.password) {
      return NextResponse.json({ success: false, error: { code: 'VALIDATION_ERROR', message: 'Email and password are required' } }, { status: 422 });
    }
    if (!(await verifyAdminCredentials(body.email, body.password))) {
      recent.push(now); attempts.set(key, recent);
      return NextResponse.json({ success: false, error: { code: 'INVALID_CREDENTIALS', message: 'Invalid email or password' } }, { status: 401 });
    }
    const principal = { email: body.email.trim().toLowerCase(), role: 'admin' as const };
    return NextResponse.json({ success: true, data: { accessToken: issueToken(principal), tokenType: 'Bearer', expiresIn: 28_800, user: principal } });
  } catch (error) {
    if (error instanceof SyntaxError) return NextResponse.json({ success: false, error: { code: 'VALIDATION_ERROR', message: 'Request body must be valid JSON' } }, { status: 422 });
    console.error('Authentication failed', error);
    return NextResponse.json({ success: false, error: { code: 'AUTH_UNAVAILABLE', message: 'Authentication is unavailable' } }, { status: 503 });
  }
}
