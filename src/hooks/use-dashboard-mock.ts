'use client';

import { useState, useEffect } from 'react';
import { DeviceTelemetry, SecurityEventLog } from '@/types';
import { INITIAL_MOCK_TELEMETRY, INITIAL_MOCK_EVENTS } from '@/data/dashboard';

export function useDashboardMock() {
  const [telemetry, setTelemetry] = useState<DeviceTelemetry>(INITIAL_MOCK_TELEMETRY);
  const [events, setEvents] = useState<SecurityEventLog[]>(INITIAL_MOCK_EVENTS);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  // Periodically simulate live device pings and motion events
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

      // Update ping timestamp
      setTelemetry((prev) => ({
        ...prev,
        lastPingTimestamp: timeStr,
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const triggerSimulatedEvent = () => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const newEvent: SecurityEventLog = {
      id: `evt-${Date.now().toString().slice(-4)}`,
      timestamp: timeStr,
      eventType: 'Motion Detected',
      severity: 'warning',
      locationTag: 'Zone 2 - West Gate',
      details: 'Simulated motion trigger evaluated by local Edge AI.',
    };

    setEvents((prev) => [newEvent, ...prev.slice(0, 4)]);
  };

  return {
    telemetry,
    events,
    isSimulating,
    setIsSimulating,
    triggerSimulatedEvent,
  };
}
