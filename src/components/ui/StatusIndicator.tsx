import React from 'react';
import { cn } from '@/lib/utils';
import { SensorStatusType } from '@/types';

export interface StatusIndicatorProps {
  status: SensorStatusType | string;
  label?: string;
  showPulse?: boolean;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  showPulse = true,
}) => {
  const isOk = ['active', 'monitoring', 'connected', 'running', 'OK'].includes(status);

  return (
    <div className="inline-flex items-center space-x-2 font-mono text-xs">
      <span className="relative flex h-2.5 w-2.5">
        {showPulse && isOk && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
        )}
        <span
          className={cn(
            'relative inline-flex rounded-full h-2.5 w-2.5',
            isOk ? 'bg-brand-accent' : 'bg-brand-alert'
          )}
        ></span>
      </span>
      <span className={cn('uppercase font-medium tracking-wider', isOk ? 'text-brand-accent' : 'text-brand-alert')}>
        {label || status}
      </span>
    </div>
  );
};
