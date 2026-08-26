import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { FOOTER_NAVIGATION } from '@/data/navigation';
import { SITE_CONFIG } from '@/data/site';
import { Shield, Linkedin, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070D] text-[#9DA7BC] border-t border-[#182238] pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#182238]">
          {/* Brand Info & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C8FF] rounded-md">
              <div className="w-9 h-9 rounded-xl bg-[#35C8FF]/10 border border-[#35C8FF]/30 flex items-center justify-center text-[#35C8FF] group-hover:bg-[#35C8FF] group-hover:text-[#05070D] transition-all">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-[#F5F7FF] group-hover:text-[#35C8FF] transition-colors">
                {SITE_CONFIG.name}
              </span>
            </Link>

            <p className="text-sm text-[#9DA7BC] font-body leading-relaxed max-w-sm">
              &quot;{SITE_CONFIG.tagline}&quot;
            </p>

            {/* Social Placeholders */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0B1020] border border-[#182238] flex items-center justify-center text-[#9DA7BC] hover:text-[#35C8FF] hover:border-[#35C8FF]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C8FF]"
                aria-label="LinkedIn Profile (Placeholder)"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0B1020] border border-[#182238] flex items-center justify-center text-[#9DA7BC] hover:text-[#35C8FF] hover:border-[#35C8FF]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C8FF]"
                aria-label="Instagram Profile (Placeholder)"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0B1020] border border-[#182238] flex items-center justify-center text-[#9DA7BC] hover:text-[#35C8FF] hover:border-[#35C8FF]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C8FF]"
                aria-label="YouTube Channel (Placeholder)"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-mono tracking-wider text-[#F5F7FF] uppercase mb-4">Project &amp; System</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#35C8FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#35C8FF]">
                  Our Project
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-[#35C8FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#35C8FF]">
                  Prototype
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-[#35C8FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#35C8FF]">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/products/safeedge" className="hover:text-[#35C8FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#35C8FF]">
                  SafeEdge™
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Proposal Links */}
          <div>
            <h4 className="text-xs font-mono tracking-wider text-[#F5F7FF] uppercase mb-4">Company &amp; Proposal</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#35C8FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#35C8FF]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#35C8FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#35C8FF]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#35C8FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#35C8FF]">
                  Proposal PDF
                </Link>
              </li>
              <li>
                <Link href="/request-demo" className="hover:text-[#35C8FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#35C8FF]">
                  Request a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div>
            <h4 className="text-xs font-mono tracking-wider text-[#F5F7FF] uppercase mb-4">Legal &amp; Governance</h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_NAVIGATION.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#35C8FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#35C8FF]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9DA7BC] space-y-4 sm:space-y-0">
          <div>
            © 2026 {SITE_CONFIG.name}. All Rights Reserved.
          </div>
          <div className="font-mono text-[11px] text-[#35C8FF]">
            Engineering Intelligence for a Safer Tomorrow.
          </div>
        </div>
      </Container>
    </footer>
  );
};
