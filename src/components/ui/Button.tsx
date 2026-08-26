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
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 rounded-full cursor-pointer';

    const variants = {
      primary: 'bg-brand-cyan text-brand-dark hover:bg-[#52E2FF] font-semibold shadow-md hover:shadow-cyan-500/20',
      secondary: 'bg-brand-dark text-white hover:bg-[#122238] shadow-md border border-brand-borderDark',
      outline: 'border border-gray-300 dark:border-brand-borderDark text-brand-dark dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 shadow-xs',
      accent: 'bg-brand-accent text-brand-dark hover:bg-[#52EEA3] font-semibold shadow-md',
      ghost: 'text-gray-600 dark:text-gray-300 hover:text-brand-dark dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5',
    };

    const sizes = {
      sm: 'h-9 px-4 text-xs font-semibold uppercase tracking-wider',
      md: 'h-11 px-6 text-sm font-semibold',
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
