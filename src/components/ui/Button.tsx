import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan disabled:pointer-events-none disabled:opacity-50 rounded-md';

    const variants = {
      primary: 'bg-brand-cyan text-brand-dark hover:bg-[#52E2FF] font-semibold shadow-sm',
      secondary: 'bg-brand-dark text-white hover:bg-[#0D1B2E] border border-brand-borderDark',
      outline: 'border border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan/10',
      accent: 'bg-brand-accent text-brand-dark hover:bg-[#52EEA3] font-semibold',
      ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
    };

    const sizes = {
      sm: 'h-9 px-3 text-xs tracking-wider uppercase font-mono',
      md: 'h-11 px-5 text-sm',
      lg: 'h-13 px-8 text-base font-semibold',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes} ref={ref as React.Ref<HTMLAnchorElement>}>
          {children}
        </Link>
      );
    }

    return (
      <button className={classes} ref={ref as React.Ref<HTMLButtonElement>} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
