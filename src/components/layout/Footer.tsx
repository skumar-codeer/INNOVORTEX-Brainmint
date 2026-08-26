import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { FOOTER_NAVIGATION } from '@/data/navigation';
import { SITE_CONFIG } from '@/data/site';
import { Shield, Linkedin, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040A14] text-gray-400 border-t border-brand-borderDark/60 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-borderDark/60">
          {/* Brand Info & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-md">
              <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                {SITE_CONFIG.name}
              </span>
            </Link>

            <p className="text-sm text-brand-mutedDark font-body leading-relaxed max-w-sm">
              &quot;{SITE_CONFIG.tagline}&quot;
            </p>

            {/* Social Placeholders Only */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-dark border border-brand-borderDark flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                aria-label="LinkedIn Profile (Placeholder)"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-dark border border-brand-borderDark flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                aria-label="Instagram Profile (Placeholder)"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-dark border border-brand-borderDark flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                aria-label="YouTube Channel (Placeholder)"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-mono tracking-wider text-white uppercase mb-4">Platform &amp; Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products/safeedge" className="hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-mono tracking-wider text-white uppercase mb-4">Company &amp; Info</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/request-demo" className="hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan">
                  Request a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div>
            <h4 className="text-xs font-mono tracking-wider text-white uppercase mb-4">Legal &amp; Ethics</h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_NAVIGATION.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-mutedDark space-y-4 sm:space-y-0">
          <div>
            © 2026 {SITE_CONFIG.name}. All Rights Reserved.
          </div>
          <div className="font-mono text-[11px] text-gray-500">
            Intelligent Technology. Safer Spaces.
          </div>
        </div>
      </Container>
    </footer>
  );
};
