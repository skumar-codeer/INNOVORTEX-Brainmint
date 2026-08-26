import { DeviceTelemetry, SecurityEventLog } from '@/types';

export const INITIAL_MOCK_TELEMETRY: DeviceTelemetry = {
  cameraStatus: 'active',
  edgeAiStatus: 'active',
  pirStatus: 'monitoring',
  gsmStatus: 'connected',
  systemHealth: 'OK',
  lastPingTimestamp: 'Just now',
};

export const INITIAL_MOCK_EVENTS: SecurityEventLog[] = [
  {
    id: 'evt-104',
    timestamp: '2 mins ago',
    eventType: 'Motion Detected',
    severity: 'info',
    locationTag: 'Zone 1 - East Perimeter',
    details: 'PIR sensor triggered heat signature above baseline threshold.',
  },
  {
    id: 'evt-105',
    timestamp: '2 mins ago',
    eventType: 'Analysis Completed',
    severity: 'info',
    locationTag: 'Zone 1 - Edge AI Core',
    details: 'On-device CV evaluated frame. Verified human perimeter approach.',
  },
  {
    id: 'evt-106',
    timestamp: '1 min ago',
    eventType: 'Safety Alert Triggered',
    severity: 'warning',
    locationTag: 'Zone 1 - Multimodal Output',
    details: 'Strobe activated & emergency GSM SMS dispatch sent to security desk.',
  },
];
