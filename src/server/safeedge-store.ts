import { appendRecord, listRecords, StoredRecord } from '@/server/json-store';

export type EventSeverity = 'info' | 'warning' | 'critical';
export type EventStatus = 'detected' | 'processing' | 'completed' | 'triggered' | 'resolved';

export interface SafeEdgeEvent {
  id: string;
  eventType: string;
  deviceId: string;
  location: string;
  severity: EventSeverity;
  status: EventStatus;
  message: string;
  metadata: Record<string, unknown>;
  correlationId?: string;
  parentEventId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SystemStatus {
  deviceId: string;
  cameraStatus: 'active' | 'monitoring' | 'connected' | 'alert' | 'offline';
  edgeAiStatus: 'active' | 'monitoring' | 'connected' | 'alert' | 'offline';
  pirStatus: 'active' | 'monitoring' | 'connected' | 'alert' | 'offline';
  gsmStatus: 'active' | 'monitoring' | 'connected' | 'alert' | 'offline';
  systemHealth: 'OK' | 'WARNING' | 'ALERT';
  lastPingTimestamp: string;
  updatedAt: string;
}

export type CreateEventInput = Omit<SafeEdgeEvent, 'id' | 'createdAt' | 'updatedAt'>;
const EVENTS_FILE = 'safeedge-events.json';
const STATUS_FILE = 'safeedge-system-status.json';

function eventFromRecord(record: StoredRecord<CreateEventInput>): SafeEdgeEvent {
  return { id: record.id, ...record.data, createdAt: record.createdAt, updatedAt: record.createdAt };
}

export async function createEvent(input: CreateEventInput): Promise<SafeEdgeEvent> {
  return eventFromRecord(await appendRecord(EVENTS_FILE, 'evt', input));
}

export async function findEvents(filters: {
  eventType?: string; deviceId?: string; severity?: EventSeverity; status?: EventStatus;
  location?: string; from?: string; to?: string; limit: number; page: number;
}) {
  const filtered = (await listRecords<CreateEventInput>(EVENTS_FILE))
    .map(eventFromRecord)
    .filter((event) => (!filters.eventType || event.eventType === filters.eventType)
      && (!filters.deviceId || event.deviceId === filters.deviceId)
      && (!filters.severity || event.severity === filters.severity)
      && (!filters.status || event.status === filters.status)
      && (!filters.location || event.location === filters.location)
      && (!filters.from || event.createdAt >= filters.from)
      && (!filters.to || event.createdAt <= filters.to))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt) || b.id.localeCompare(a.id));
  const start = (filters.page - 1) * filters.limit;
  const data = filtered.slice(start, start + filters.limit);
  return { data, pagination: { limit: filters.limit, page: filters.page, total: filtered.length, hasMore: start + data.length < filtered.length } };
}

const defaultStatus = (): SystemStatus => ({
  deviceId: 'SE-RPI5-0091', cameraStatus: 'active', edgeAiStatus: 'active', pirStatus: 'monitoring',
  gsmStatus: 'connected', systemHealth: 'OK', lastPingTimestamp: new Date().toISOString(), updatedAt: new Date().toISOString(),
});

export async function getSystemStatus(): Promise<SystemStatus> {
  const records = await listRecords<SystemStatus>(STATUS_FILE);
  return records.length ? records.at(-1)!.data : defaultStatus();
}

export async function saveSystemStatus(input: Omit<SystemStatus, 'updatedAt'>): Promise<SystemStatus> {
  const status: SystemStatus = { ...input, updatedAt: new Date().toISOString() };
  await appendRecord(STATUS_FILE, 'status', status);
  return status;
}
