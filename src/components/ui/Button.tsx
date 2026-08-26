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
      'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C8FF] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 rounded-full cursor-pointer';

    const variants = {
      primary: 'bg-gradient-to-r from-[#35C8FF] to-[#8B5CF6] text-[#05070D] font-bold shadow-lg shadow-[#35C8FF]/20 hover:shadow-[#8B5CF6]/30 hover:opacity-95',
      secondary: 'bg-[#0B1020] text-[#F5F7FF] hover:bg-[#182238] border border-[#182238] hover:border-[#35C8FF]/40 shadow-md',
      outline: 'border border-[#35C8FF]/40 text-[#35C8FF] hover:bg-[#35C8FF]/10 hover:border-[#35C8FF] shadow-xs',
      accent: 'bg-[#39E58C] text-[#05070D] hover:bg-[#52EEA3] font-bold shadow-md shadow-[#39E58C]/20',
      ghost: 'text-[#9DA7BC] hover:text-[#F5F7FF] hover:bg-white/5',
    };

    const sizes = {
      sm: 'h-9 px-4 text-xs font-mono font-semibold uppercase tracking-wider',
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
