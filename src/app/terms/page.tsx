import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { COMPANY_NAME } from '@/lib/constants';

export const metadata = {
  title: 'Terms of Service | INNOVORTEX',
  description: 'Terms of service and website usage agreement for INNOVORTEX website.',
};

export default function TermsPage() {
  return (
    <div className="pt-24">
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold font-heading text-white">Terms of Service</h1>
            <p className="text-xs font-mono text-brand-cyan">Last Updated: August 2026</p>

            <div className="space-y-6 text-sm text-brand-mutedDark leading-relaxed border-t border-brand-borderDark pt-6">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-white font-heading">1. Acceptance of Terms</h2>
                <p>
                  By accessing and browsing the official website of {COMPANY_NAME}, you agree to comply with and be bound by these Terms of Service.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-white font-heading">2. Intellectual Property Rights</h2>
                <p>
                  All content, trademarks, product names (including SafeEdge™), technical diagrams, and visual designs displayed on this website are the proprietary intellectual property of {COMPANY_NAME} unless otherwise indicated.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-white font-heading">3. Disclaimer of Warranties</h2>
                <p>
                  Technical specifications, performance benchmarks, and product descriptions provided on this website are for informational and planning purposes. Final deployment specifications are subject to formal pilot contracts and field engineering assessments.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
