import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  theme?: 'dark' | 'light';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ theme = 'dark', className, children, ...props }) => {
  const themeClasses =
    theme === 'dark'
      ? 'bg-brand-dark text-white border-b border-brand-borderDark/40'
      : 'bg-brand-light text-brand-dark border-b border-gray-200';

  return (
    <section className={cn('py-16 sm:py-24 transition-colors duration-200', themeClasses, className)} {...props}>
      {children}
    </section>
  );
};
