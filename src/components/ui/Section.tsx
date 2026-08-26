import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  theme?: 'dark' | 'light' | 'surface';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ theme = 'dark', className, children, ...props }) => {
  const themeClasses = {
    dark: 'bg-[#05070D] text-[#F5F7FF] border-b border-[#182238]/60',
    light: 'bg-[#080B14] text-[#F5F7FF] border-b border-[#182238]/60',
    surface: 'bg-[#0B1020] text-[#F5F7FF] border-b border-[#182238]/80',
  };

  return (
    <section className={cn('py-20 sm:py-32 transition-colors duration-300 relative tech-grid-bg', themeClasses[theme], className)} {...props}>
      {children}
    </section>
  );
};
