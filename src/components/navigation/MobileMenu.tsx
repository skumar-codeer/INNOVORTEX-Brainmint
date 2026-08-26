'use client';

import React from 'react';
import Link from 'next/link';
import { NavLink } from '@/types';
import { Button } from '@/components/ui/Button';
import { Shield } from 'lucide-react';
import { COMPANY_NAME, BRAND_TAGLINE } from '@/lib/constants';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavLink[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navItems }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden bg-brand-dark/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-20 overflow-y-auto border-t border-brand-borderDark">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-3 pb-6 border-b border-brand-borderDark">
          <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <div className="font-heading font-bold text-lg text-white">{COMPANY_NAME}</div>
            <div className="text-xs text-brand-mutedDark font-body">{BRAND_TAGLINE}</div>
          </div>
        </div>

        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <div key={item.label} className="flex flex-col">
              <Link
                href={item.href}
                onClick={onClose}
                className="py-2.5 px-3 text-base font-medium text-gray-200 hover:text-brand-cyan hover:bg-white/5 rounded-md transition-colors"
              >
                {item.label}
              </Link>
              {item.subLinks && (
                <div className="pl-6 flex flex-col space-y-1 my-1 border-l border-brand-borderDark/60">
                  {item.subLinks.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={onClose}
                      className="py-1.5 px-3 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="pt-8 border-t border-brand-borderDark flex flex-col space-y-3">
        <Button href="/request-demo" variant="primary" size="lg" className="w-full" onClick={onClose}>
          Request a Demo
        </Button>
        <Button href="/contact" variant="outline" size="lg" className="w-full" onClick={onClose}>
          Contact Engineering
        </Button>
      </div>
    </div>
  );
};
