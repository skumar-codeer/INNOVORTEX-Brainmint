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
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-14 sm:mb-20',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono tracking-widest uppercase rounded-full border border-[#35C8FF]/30 text-[#35C8FF] bg-[#35C8FF]/10 shadow-sm shadow-[#35C8FF]/5">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-heading text-[#F5F7FF] leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-5 text-base sm:text-lg leading-relaxed font-body text-[#9DA7BC] max-w-2xl',
            align === 'center' ? 'mx-auto' : ''
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
