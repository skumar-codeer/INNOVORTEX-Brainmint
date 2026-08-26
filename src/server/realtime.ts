import type { Server as SocketServer } from 'socket.io';

declare global { var safeEdgeIo: SocketServer | undefined; }

export function broadcast(event: 'event:created' | 'status:updated', payload: unknown) {
  globalThis.safeEdgeIo?.emit(event, payload);
}
