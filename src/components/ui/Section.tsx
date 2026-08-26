import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  theme?: 'dark' | 'light' | 'surface';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ theme = 'light', className, children, ...props }) => {
  const themeClasses = {
    dark: 'bg-[#07111F] text-white border-b border-brand-borderDark/40',
    light: 'bg-[#F6F8FA] text-brand-dark border-b border-gray-200/60',
    surface: 'bg-[#EEF4F8] text-brand-dark border-b border-gray-200/80',
  };

  return (
    <section className={cn('py-20 sm:py-32 transition-colors duration-300 relative', themeClasses[theme], className)} {...props}>
      {children}
    </section>
  );
};
