import { createHmac, timingSafeEqual } from 'node:crypto';
import { createServer } from 'node:http';
import next from 'next';
import { Server } from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME ?? '0.0.0.0';
const port = Number(process.env.PORT ?? 3000);
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

function verifySocketToken(token) {
  const secret = process.env.AUTH_JWT_SECRET;
  if (!secret || typeof token !== 'string') return false;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return false;
  const expected = createHmac('sha256', secret).update(payload).digest('base64url');
  if (expected.length !== signature.length || !timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) return false;
  try {
    const decoded = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return decoded.exp > Date.now() / 1000 && ['admin', 'operator', 'viewer'].includes(decoded.role);
  } catch { return false; }
}

await app.prepare();
const server = createServer(handle);
const allowedOrigins = (process.env.CORS_ORIGIN ?? '').split(',').map((value) => value.trim()).filter(Boolean);
const io = new Server(server, { cors: { origin: allowedOrigins.length ? allowedOrigins : false, methods: ['GET', 'POST'] } });
globalThis.safeEdgeIo = io;
io.use((socket, nextMiddleware) => verifySocketToken(socket.handshake.auth.token)
  ? nextMiddleware()
  : nextMiddleware(new Error('unauthorized')));
io.on('connection', (socket) => socket.emit('dashboard:ready', { connectedAt: new Date().toISOString() }));
server.listen(port, hostname, () => console.log(`SafeEdge API and realtime server ready on http://${hostname}:${port}`));
