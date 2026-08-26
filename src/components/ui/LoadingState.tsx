import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LoadingStateProps {
  message?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Initializing SafeEdge™ telemetry stream...',
  className,
}) => {
  return (
    <div className={cn('flex flex-col items-center justify-center p-8 text-center', className)}>
      <Loader2 className="w-8 h-8 text-brand-cyan animate-spin mb-3" />
      <p className="text-sm font-mono text-brand-mutedDark">{message}</p>
    </div>
  );
};
