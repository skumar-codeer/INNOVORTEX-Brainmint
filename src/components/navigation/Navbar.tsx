'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MAIN_NAVIGATION } from '@/data/navigation';
import { MobileMenu } from './MobileMenu';
import { useMobileMenu } from '@/hooks/use-mobile-menu';
import { COMPANY_NAME } from '@/lib/constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-borderDark/60 py-3 shadow-lg'
          : 'bg-brand-dark/40 backdrop-blur-sm border-b border-white/5 py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                {COMPANY_NAME}
              </span>
              <span className="text-[9px] font-mono tracking-widest text-brand-cyan/80 uppercase">
                Edge AI Safety
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {MAIN_NAVIGATION.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.subLinks && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  {item.label}
                  {item.subLinks && <ChevronDown className="w-3.5 h-3.5 ml-1 text-gray-400" />}
                </Link>

                {/* Dropdown Menu */}
                {item.subLinks && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-64 pt-2 z-50">
                    <div className="bg-brand-cardDark border border-brand-borderDark rounded-lg shadow-xl p-2">
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block p-2.5 rounded-md hover:bg-brand-borderDark/50 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="text-sm font-medium text-white">{sub.label}</div>
                          {sub.description && (
                            <div className="text-xs text-brand-mutedDark mt-0.5">{sub.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button href="/request-demo" variant="primary" size="sm">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={isOpen} onClose={closeMenu} navItems={MAIN_NAVIGATION} />
    </header>
  );
};
