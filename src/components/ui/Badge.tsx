import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'cyan' | 'accent' | 'alert' | 'danger' | 'neutral';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'cyan', className, children, ...props }) => {
  const variants = {
    cyan: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30',
    accent: 'bg-brand-accent/10 text-brand-accent border-brand-accent/30',
    alert: 'bg-brand-alert/10 text-brand-alert border-brand-alert/30',
    danger: 'bg-brand-danger/10 text-brand-danger border-brand-danger/30',
    neutral: 'bg-gray-800 text-gray-300 border-gray-700',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 text-xs font-mono font-medium rounded-full border',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
