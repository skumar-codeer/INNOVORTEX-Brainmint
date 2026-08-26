import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Telemetry Connection Interrupted',
  message = 'Unable to establish link with local SafeEdge node. Check network configuration.',
  onRetry,
  className,
}) => {
  return (
    <div className={cn('flex flex-col items-center justify-center p-8 text-center rounded-lg border border-brand-danger/30 bg-brand-danger/5 text-white', className)}>
      <AlertTriangle className="w-10 h-10 text-brand-danger mb-3" />
      <h4 className="text-lg font-bold font-heading mb-1">{title}</h4>
      <p className="text-sm text-gray-300 max-w-md mb-4">{message}</p>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry}>
          Retry Connection
        </Button>
      )}
    </div>
  );
};
