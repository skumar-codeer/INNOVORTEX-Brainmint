'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Shield, X } from 'lucide-react';
import { MAIN_NAVIGATION } from '@/data/navigation';
import { SITE_CONFIG } from '@/data/site';
import { cn } from '@/lib/utils';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  // Handle body scroll locking & Escape key accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden bg-brand-dark/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-20 overflow-y-auto border-t border-brand-borderDark"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className="flex flex-col space-y-6">
        {/* Top Header inside Drawer */}
        <div className="flex items-center justify-between pb-6 border-b border-brand-borderDark">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-lg text-white">{SITE_CONFIG.name}</div>
              <div className="text-xs text-brand-mutedDark">{SITE_CONFIG.tagline}</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2">
          {MAIN_NAVIGATION.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={cn(
                  'py-3 px-4 text-base font-medium rounded-lg transition-colors flex items-center justify-between',
                  isActive
                    ? 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 font-bold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                )}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Drawer Bottom Action */}
      <div className="pt-8 border-t border-brand-borderDark flex flex-col space-y-3">
        <Button href="/request-demo" variant="primary" size="lg" className="w-full" onClick={onClose}>
          Request a Demo
        </Button>
      </div>
    </div>
  );
};
