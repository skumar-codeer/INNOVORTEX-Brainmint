import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light' | 'surface';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className,
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        'max-w-3xl mb-14 sm:mb-20',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-block px-3.5 py-1 mb-4 text-xs font-mono tracking-widest uppercase rounded-full border font-medium',
            isDark
              ? 'border-brand-cyan/30 text-brand-cyan bg-brand-cyan/10'
              : 'border-brand-dark/15 text-brand-dark bg-brand-dark/5'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-heading leading-[1.15]',
          isDark ? 'text-white' : 'text-brand-dark'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-5 text-base sm:text-lg leading-relaxed font-body max-w-2xl',
            align === 'center' ? 'mx-auto' : '',
            isDark ? 'text-brand-mutedDark' : 'text-gray-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
