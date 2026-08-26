import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dark' | 'light';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ variant = 'dark', className, children, ...props }) => {
  const baseStyles = 'p-6 rounded-xl border transition-all duration-300';
  const variants = {
    dark: 'bg-brand-cardDark border-brand-borderDark text-white hover:border-brand-cyan/40',
    light: 'bg-white border-gray-200 text-brand-dark shadow-sm hover:border-brand-dark/30',
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
};
