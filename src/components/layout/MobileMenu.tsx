'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Shield, X, ChevronRight, ArrowRight } from 'lucide-react';
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
      className="fixed inset-0 z-[100] lg:hidden bg-[#07111F] text-white flex flex-col justify-between p-6 sm:p-8 pt-[calc(1.25rem+env(safe-area-inset-top))] pb-[calc(1.5rem+env(safe-area-inset-bottom))]"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Top Header inside Drawer */}
      <div className="flex items-center justify-between pb-5 border-b border-white/10 shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-[#20D9FF]/10 border border-[#20D9FF]/30 flex items-center justify-center text-[#20D9FF] shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="font-heading font-bold text-lg text-white tracking-tight">{SITE_CONFIG.name}</div>
            <div className="text-xs text-[#8A99AD] font-mono leading-tight">{SITE_CONFIG.tagline}</div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="min-w-[44px] min-h-[44px] p-2.5 rounded-full text-white hover:bg-white/10 transition-colors flex items-center justify-center border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20D9FF]"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links (Scrollable if screen height is short) */}
      <nav className="flex-1 overflow-y-auto min-h-0 py-6 space-y-2" aria-label="Mobile Navigation Links">
        {MAIN_NAVIGATION.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={cn(
                'py-3.5 px-4 text-base font-semibold rounded-xl transition-all flex items-center justify-between min-h-[48px]',
                isActive
                  ? 'bg-[#20D9FF]/10 text-[#20D9FF] border border-[#20D9FF]/30 font-bold'
                  : 'text-[#F5F7FF] hover:text-white hover:bg-white/5 border border-transparent'
              )}
            >
              <span>{item.label}</span>
              {isActive ? (
                <span className="w-2.5 h-2.5 rounded-full bg-[#20D9FF] shadow-sm shadow-[#20D9FF]"></span>
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Drawer Bottom Action CTA (Fixed near bottom) */}
      <div className="pt-4 border-t border-white/10 flex flex-col space-y-3 shrink-0">
        <Button
          href="/request-demo"
          variant="primary"
          size="lg"
          className="w-full rounded-full bg-[#20D9FF] text-[#07111F] font-bold hover:bg-[#52E2FF] shadow-lg shadow-[#20D9FF]/20"
          onClick={onClose}
        >
          Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
