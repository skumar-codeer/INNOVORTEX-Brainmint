import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'feature' | 'product' | 'technical' | 'dark' | 'light';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ variant = 'default', className, children, ...props }) => {
  const baseStyles = 'rounded-3xl border transition-all duration-300 relative overflow-hidden';
  
  const variants = {
    default: 'bg-white border-gray-200/80 text-brand-dark shadow-sm hover:shadow-md hover:border-gray-300',
    light: 'bg-white border-gray-200/80 text-brand-dark shadow-sm hover:shadow-xl hover:-translate-y-0.5 hover:border-gray-300',
    feature: 'bg-white/90 backdrop-blur-sm border border-gray-200/90 text-brand-dark shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-brand-cyan/40',
    product: 'bg-brand-surface border border-gray-200/90 text-brand-dark shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-cyan/50',
    technical: 'bg-white border border-gray-200/90 text-brand-dark shadow-sm hover:shadow-lg hover:border-brand-dark/40 font-mono',
    dark: 'bg-[#0D1B2E] border-brand-borderDark text-white shadow-xl hover:shadow-2xl hover:border-brand-cyan/40 hover:-translate-y-0.5',
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
};
