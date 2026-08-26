import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';
import { RESPONSIBLE_AI_PRINCIPLES } from '@/data/trust';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Trust & Responsible AI | INNOVORTEX',
  description: 'Our technical commitment to privacy by design, zero facial recognition, and ethical edge AI.',
};

export default function TrustPage() {
  return (
    <div className="pt-24">
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded border border-brand-cyan/30">
              Ethical AI Architecture
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight">
              Trust & Responsible AI Architecture
            </h1>
            <p className="text-lg text-brand-mutedDark leading-relaxed">
              Security should protect human safety without infringing upon personal privacy. Explore our mathematical and architectural guarantees.
            </p>
          </div>
        </Container>
      </Section>

      <Section theme="light">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="Core Guarantees"
            title="Privacy-Conscious AI Principles"
            subtitle="How we enforce technical boundaries to prevent surveillance misuse."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESPONSIBLE_AI_PRINCIPLES.map((principle) => (
              <div key={principle.id} className="p-6 sm:p-8 rounded-xl bg-white border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-cyan flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-brand-dark">{principle.title}</h3>
                </div>

                <p className="text-sm text-gray-700 font-medium">{principle.summary}</p>

                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1">
                    Technical Implementation:
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed font-mono">{principle.technicalImplementation}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </div>
  );
}
