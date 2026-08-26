import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'dark',
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-block px-3 py-1 mb-4 text-xs font-mono tracking-widest uppercase rounded border',
            theme === 'dark'
              ? 'border-brand-cyan/30 text-brand-cyan bg-brand-cyan/5'
              : 'border-brand-dark/20 text-brand-dark bg-brand-dark/5'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl font-bold tracking-tight font-heading',
          theme === 'dark' ? 'text-white' : 'text-brand-dark'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed font-body',
            theme === 'dark' ? 'text-brand-mutedDark' : 'text-gray-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
