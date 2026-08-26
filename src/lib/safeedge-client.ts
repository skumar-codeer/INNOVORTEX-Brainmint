import { io, Socket } from 'socket.io-client';
import type { SafeEdgeEvent, SystemStatus } from '@/server/safeedge-store';

type ApiResponse<T> = { success: true; data: T } | { success: false; error: { code: string; message: string } };

async function request<T>(path: string, token: string): Promise<T> {
  const response = await fetch(path, { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' });
  const body = await response.json() as ApiResponse<T>;
  if (!response.ok || !body.success) throw new Error(body.success ? 'Request failed' : body.error.message);
  return body.data;
}

export const safeEdgeApi = {
  getStatus: (token: string) => request<SystemStatus>('/api/dashboard/status', token),
  getRecentEvents: (token: string, limit = 10) => request<SafeEdgeEvent[]>(`/api/events/recent?limit=${limit}`, token),
};

export function connectSafeEdgeRealtime(token: string): Socket {
  return io({ auth: { token }, transports: ['websocket', 'polling'] });
}
