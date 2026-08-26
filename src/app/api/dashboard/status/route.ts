import { NextRequest, NextResponse } from 'next/server';
import { requireRole } from '@/server/auth';
import { broadcast } from '@/server/realtime';
import { getSystemStatus, saveSystemStatus, SystemStatus } from '@/server/safeedge-store';

export const runtime = 'nodejs';
const sensorStates = new Set(['active', 'monitoring', 'connected', 'alert', 'offline']);
const healthStates = new Set(['OK', 'WARNING', 'ALERT']);
const protectedResponse = () => NextResponse.json({ success: false, error: { code: 'UNAUTHORIZED', message: 'A valid access token is required' } }, { status: 401 });

export async function GET(request: NextRequest) {
  if (!requireRole(request, ['admin', 'operator', 'viewer'])) return protectedResponse();
  return NextResponse.json({ success: true, data: await getSystemStatus() });
}

export async function PATCH(request: NextRequest) {
  if (!requireRole(request, ['admin', 'operator'])) return protectedResponse();
  try {
    const body = await request.json() as Partial<SystemStatus>;
    const current = await getSystemStatus();
    const next = { ...current, ...body, updatedAt: undefined } as Omit<SystemStatus, 'updatedAt'>;
    if (!next.deviceId?.trim() || !sensorStates.has(next.cameraStatus) || !sensorStates.has(next.edgeAiStatus) || !sensorStates.has(next.pirStatus) || !sensorStates.has(next.gsmStatus) || !healthStates.has(next.systemHealth)) throw new Error('Invalid system status payload');
    const status = await saveSystemStatus({ ...next, lastPingTimestamp: body.lastPingTimestamp ?? new Date().toISOString() });
    broadcast('status:updated', status);
    return NextResponse.json({ success: true, data: status });
  } catch { return NextResponse.json({ success: false, error: { code: 'VALIDATION_ERROR', message: 'Invalid system status payload' } }, { status: 422 }); }
}
