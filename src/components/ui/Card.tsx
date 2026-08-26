import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'feature' | 'product' | 'technical' | 'dark' | 'light';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ variant = 'default', className, children, ...props }) => {
  const baseStyles = 'rounded-3xl border transition-all duration-300 relative overflow-hidden';
  
  const variants = {
    default: 'bg-[#0B1020] border-[#182238] text-[#F5F7FF] shadow-xl hover:shadow-2xl hover:border-[#35C8FF]/40 hover:-translate-y-0.5',
    dark: 'bg-[#0B1020] border-[#182238] text-[#F5F7FF] shadow-xl hover:shadow-2xl hover:border-[#35C8FF]/40 hover:-translate-y-0.5',
    light: 'bg-[#0B1020] border-[#182238] text-[#F5F7FF] shadow-xl hover:shadow-2xl hover:border-[#8B5CF6]/40 hover:-translate-y-0.5',
    feature: 'bg-[#080B14] border border-[#182238] text-[#F5F7FF] shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-[#35C8FF]/50',
    product: 'bg-[#0B1020] border border-[#182238] text-[#F5F7FF] shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-[#8B5CF6]/50',
    technical: 'bg-[#05070D] border border-[#182238] text-[#F5F7FF] shadow-xl hover:shadow-2xl hover:border-[#22D3EE]/50 font-mono',
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
};
