'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield } from 'lucide-react';
import { Container } from '@/components/ui/Container';
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-borderDark/60 py-3 shadow-lg'
          : 'bg-brand-dark/40 backdrop-blur-sm border-b border-white/5 py-5'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <Link href="/" className="flex items-center space-x-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-md">
            <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                {SITE_CONFIG.name}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Items */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {MAIN_NAVIGATION.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'px-3.5 py-2 text-sm font-medium rounded-md transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan',
                    isActive
                      ? 'text-brand-cyan font-semibold bg-brand-cyan/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Request Demo CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button href="/request-demo" variant="primary" size="sm">
              Request a Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Accessible Mobile Menu Component */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
