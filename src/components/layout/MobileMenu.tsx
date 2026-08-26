'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Shield, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from './Navbar';
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
      className="fixed inset-0 z-50 lg:hidden bg-[#05070D]/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-6 text-[#F5F7FF] overflow-y-auto border-t border-white/10"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className="flex flex-col space-y-6">
        {/* Top Header inside Drawer */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#35C8FF]/10 border border-[#35C8FF]/30 flex items-center justify-center text-[#35C8FF]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-lg text-[#F5F7FF]">{SITE_CONFIG.name}</div>
              <div className="text-xs text-[#9DA7BC] font-mono">{SITE_CONFIG.tagline}</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#9DA7BC] hover:text-[#F5F7FF] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C8FF]"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={cn(
                  'py-3.5 px-5 text-base font-semibold rounded-2xl transition-all flex items-center justify-between font-mono text-xs uppercase tracking-wider',
                  isActive
                    ? 'bg-[#35C8FF]/10 text-[#35C8FF] border border-[#35C8FF]/30 font-bold'
                    : 'text-[#9DA7BC] hover:text-[#F5F7FF] hover:bg-white/5'
                )}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#35C8FF]"></span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Drawer Bottom Action */}
      <div className="pt-6 border-t border-white/10 flex flex-col space-y-3">
        <Button
          href="/technology"
          variant="primary"
          size="lg"
          className="w-full rounded-full bg-gradient-to-r from-[#35C8FF] to-[#8B5CF6] text-[#05070D] font-bold border-none"
          onClick={onClose}
        >
          Explore Project <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
