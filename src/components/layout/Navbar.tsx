'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/data/site';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

export const NAV_LINKS = [
  { label: 'Our Project', href: '/' },
  { label: 'Prototype', href: '/dashboard' },
  { label: 'Technology', href: '/technology' },
  { label: 'Proposal', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={cn(
          'w-full transition-all duration-300 border-b',
          scrolled
            ? 'bg-[#05070D]/90 backdrop-blur-xl border-white/10 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-[#05070D]/70 backdrop-blur-md border-white/5 py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: INNOVORTEX Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C8FF] rounded-lg px-1 py-0.5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#35C8FF]/10 border border-[#35C8FF]/30 flex items-center justify-center text-[#35C8FF] group-hover:bg-[#35C8FF] group-hover:text-[#05070D] transition-all duration-300 shadow-sm shadow-[#35C8FF]/10">
              <Shield className="w-5 h-5" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-[#F5F7FF] group-hover:text-[#35C8FF] transition-colors">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C8FF]',
                    isActive
                      ? 'text-[#35C8FF] font-semibold bg-[#35C8FF]/10 border border-[#35C8FF]/30'
                      : 'text-[#9DA7BC] hover:text-[#F5F7FF] hover:bg-white/5'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              href="/technology"
              variant="primary"
              size="sm"
              className="rounded-full px-5 text-xs bg-gradient-to-r from-[#35C8FF] to-[#8B5CF6] text-[#05070D] font-bold border-none hover:opacity-90 shadow-md shadow-[#35C8FF]/20"
            >
              Explore Project <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#9DA7BC] hover:text-[#F5F7FF] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C8FF]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Menu Component */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
