import React from 'react';
import { SecurityEventLog } from '@/types';
import { AlertTriangle, CheckCircle } from 'lucide-react';

export interface EventLogProps {
  events: SecurityEventLog[];
}

export const EventLog: React.FC<EventLogProps> = ({ events }) => {
  return (
    <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
      {events.map((evt) => (
        <div
          key={evt.id}
          className="flex items-start justify-between p-3 rounded-lg bg-brand-dark/70 border border-brand-borderDark/80 hover:border-brand-cyan/40 transition-colors"
        >
          <div className="flex items-start space-x-3">
            <div className="mt-0.5">
              {evt.severity === 'critical' ? (
                <AlertTriangle className="w-4 h-4 text-brand-danger" />
              ) : evt.severity === 'warning' ? (
                <AlertTriangle className="w-4 h-4 text-brand-alert" />
              ) : (
                <CheckCircle className="w-4 h-4 text-brand-cyan" />
              )}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold font-mono text-white">{evt.eventType}</span>
                <span className="text-[10px] font-mono text-brand-mutedDark">[{evt.locationTag}]</span>
              </div>
              <p className="text-xs text-gray-300 mt-0.5">{evt.details}</p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-gray-500 whitespace-nowrap ml-2">{evt.timestamp}</span>
        </div>
      ))}
    </div>
  );
};
