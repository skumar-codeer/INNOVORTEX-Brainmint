import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { FOOTER_LINKS } from '@/data/navigation';
import { Shield } from 'lucide-react';
import { COMPANY_NAME, BRAND_TAGLINE, BRAND_POSITIONING } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040A14] text-gray-400 border-t border-brand-borderDark/60 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-borderDark/60">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                {COMPANY_NAME}
              </span>
            </Link>
            <p className="text-sm text-brand-mutedDark font-body leading-relaxed max-w-sm">
              {BRAND_TAGLINE}
            </p>
            <div className="inline-block px-3 py-1 bg-brand-cyan/5 border border-brand-cyan/20 rounded text-xs font-mono text-brand-cyan">
              {BRAND_POSITIONING}
            </div>
          </div>

          {/* Column 1: Products */}
          <div>
            <h4 className="text-sm font-mono tracking-wider text-white uppercase mb-4">Products & Platform</h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-brand-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-sm font-mono tracking-wider text-white uppercase mb-4">Target Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-brand-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Legal */}
          <div>
            <h4 className="text-sm font-mono tracking-wider text-white uppercase mb-4">Company & Ethics</h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-brand-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-mutedDark space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved. SafeEdge™ is a registered trademark of INNOVORTEX.
          </div>
          <div className="flex items-center space-x-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
