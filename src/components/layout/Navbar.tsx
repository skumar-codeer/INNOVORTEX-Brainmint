'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MAIN_NAVIGATION } from '@/data/navigation';
import { SITE_CONFIG } from '@/data/site';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 pb-2 px-4 sm:px-6 transition-all duration-300">
      <div
        className={cn(
          'max-w-7xl mx-auto rounded-full px-5 py-2.5 transition-all duration-300 flex items-center justify-between',
          scrolled
            ? 'bg-white/95 text-brand-dark shadow-xl border border-gray-200/90 backdrop-blur-md'
            : 'bg-white/90 text-brand-dark shadow-md border border-gray-200/70 backdrop-blur-md'
        )}
      >
        {/* Logo on Left */}
        <Link
          href="/"
          className="flex items-center space-x-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-full px-2 py-1"
        >
          <div className="w-8 h-8 rounded-full bg-brand-dark text-brand-cyan flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300">
            <Shield className="w-4 h-4" />
          </div>
          <span className="font-heading font-bold text-lg tracking-tight text-brand-dark group-hover:text-brand-cyan transition-colors">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
          {MAIN_NAVIGATION.filter((item) => item.href !== '/dashboard').map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan',
                  isActive
                    ? 'text-brand-dark font-bold bg-brand-surface border border-gray-200/80 shadow-xs'
                    : 'text-gray-600 hover:text-brand-dark hover:bg-gray-100/80'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Request Demo CTA */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button href="/request-demo" variant="primary" size="sm" className="rounded-full px-5 text-xs">
            Request a Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[44px] min-h-[44px] p-2.5 rounded-full text-brand-dark hover:bg-gray-100 transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Component */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
