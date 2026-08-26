import { NextRequest, NextResponse } from 'next/server';
import { requireRole } from '@/server/auth';
import { broadcast } from '@/server/realtime';
import { createEvent, EventSeverity, EventStatus, findEvents } from '@/server/safeedge-store';

export const runtime = 'nodejs';
const severities = new Set<EventSeverity>(['info', 'warning', 'critical']);
const statuses = new Set<EventStatus>(['detected', 'processing', 'completed', 'triggered', 'resolved']);

function unauthorized() { return NextResponse.json({ success: false, error: { code: 'UNAUTHORIZED', message: 'A valid access token is required' } }, { status: 401 }); }
function parsePage(value: string | null, fallback: number, name: string) {
  if (!value) return fallback;
  const number = Number(value);
  if (!Number.isInteger(number) || number < 1 || (name === 'limit' && number > 100)) throw new Error(`${name} must be a valid positive integer${name === 'limit' ? ' up to 100' : ''}`);
  return number;
}

export async function GET(request: NextRequest) {
  if (!requireRole(request, ['admin', 'operator', 'viewer'])) return unauthorized();
  try {
    const query = request.nextUrl.searchParams;
    const from = query.get('from') ?? undefined; const to = query.get('to') ?? undefined;
    if ((from && Number.isNaN(Date.parse(from))) || (to && Number.isNaN(Date.parse(to)))) throw new Error('from and to must be ISO-8601 timestamps');
    const result = await findEvents({
      eventType: query.get('event_type') ?? undefined, deviceId: query.get('device_id') ?? undefined,
      severity: (query.get('severity') ?? undefined) as EventSeverity | undefined, status: (query.get('status') ?? undefined) as EventStatus | undefined,
      location: query.get('location') ?? undefined, from, to, limit: parsePage(query.get('limit'), 20, 'limit'), page: parsePage(query.get('page'), 1, 'page'),
    });
    return NextResponse.json({ success: true, ...result });
  } catch (error) { return NextResponse.json({ success: false, error: { code: 'VALIDATION_ERROR', message: error instanceof Error ? error.message : 'Invalid query' } }, { status: 422 }); }
}

export async function POST(request: NextRequest) {
  if (!requireRole(request, ['admin', 'operator'])) return unauthorized();
  try {
    const body = await request.json() as Record<string, unknown>;
    const required = ['event_type', 'device_id', 'location', 'severity', 'message'];
    const missing = required.find((key) => typeof body[key] !== 'string' || !(body[key] as string).trim());
    if (missing) throw new Error(`${missing} is required`);
    const severity = body.severity as EventSeverity;
    const status = (body.status ?? 'detected') as EventStatus;
    if (!severities.has(severity)) throw new Error('severity must be info, warning, or critical');
    if (!statuses.has(status)) throw new Error('status is invalid');
    if (body.metadata !== undefined && (typeof body.metadata !== 'object' || body.metadata === null || Array.isArray(body.metadata))) throw new Error('metadata must be an object');
    const event = await createEvent({
      eventType: (body.event_type as string).trim(), deviceId: (body.device_id as string).trim(), location: (body.location as string).trim(), severity, status,
      message: (body.message as string).trim(), metadata: (body.metadata as Record<string, unknown> | undefined) ?? {},
      correlationId: typeof body.correlation_id === 'string' ? body.correlation_id.trim() : undefined,
      parentEventId: typeof body.parent_event_id === 'string' ? body.parent_event_id.trim() : undefined,
    });
    broadcast('event:created', event);
    return NextResponse.json({ success: true, data: event }, { status: 201 });
  } catch (error) { return NextResponse.json({ success: false, error: { code: 'VALIDATION_ERROR', message: error instanceof Error ? error.message : 'Invalid event' } }, { status: 422 }); }
}
