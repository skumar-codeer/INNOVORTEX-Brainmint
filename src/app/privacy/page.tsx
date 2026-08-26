import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { COMPANY_NAME } from '@/lib/constants';

export const metadata = {
  title: 'Privacy Policy | INNOVORTEX',
  description: 'INNOVORTEX privacy policy regarding website usage, contact forms, and SafeEdge zero-cloud video privacy principles.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold font-heading text-white">Privacy Policy</h1>
            <p className="text-xs font-mono text-brand-cyan">Last Updated: August 2026</p>

            <div className="space-y-6 text-sm text-brand-mutedDark leading-relaxed border-t border-brand-borderDark pt-6">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-white font-heading">1. Introduction & Core Privacy Commitment</h2>
                <p>
                  At {COMPANY_NAME}, we are committed to upholding the highest standards of data privacy. This policy governs how we collect, process, and handle information submitted through our official website, as well as the fundamental privacy-by-design architecture built into our hardware products.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-white font-heading">2. Zero-Cloud Video Retention Policy (SafeEdge™ Hardware)</h2>
                <p>
                  Our primary product, SafeEdge™, operates on a zero-cloud video processing architecture. Optical camera feeds are processed exclusively inside volatile RAM on local edge hardware and discarded immediately following neural evaluation. {COMPANY_NAME} does not stream, collect, store, or transmit raw camera video or facial biometric records to external cloud servers.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-white font-heading">3. Information Collected via Website Forms</h2>
                <p>
                  When you submit a contact inquiry or request a technical demonstration, we collect work contact information (e.g. name, work email address, organization name, and message details) strictly for the purpose of communicating with you regarding your inquiry. We do not sell or rent user contact data to third parties.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-white font-heading">4. Contact Information</h2>
                <p>
                  For any privacy inquiries or formal data access requests, please contact privacy@innovortex.com.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
