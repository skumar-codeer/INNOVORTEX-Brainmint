import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RESPONSIBLE_AI_PRINCIPLES } from '@/data/trust';

export const metadata = {
  title: 'Responsible AI Policy | INNOVORTEX',
  description: 'Our ethical AI framework, privacy-by-design standards, and zero facial recognition policy.',
};

export default function ResponsibleAIPage() {
  return (
    <div className="pt-24">
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded border border-brand-cyan/30">
              Ethical Standards
            </span>
            <h1 className="text-4xl font-bold font-heading text-white">Responsible AI Policy</h1>
            <p className="text-base text-brand-mutedDark leading-relaxed">
              INNOVORTEX is committed to pioneering intelligent safety technology that enforces human dignity, prevents mass surveillance, and operates with complete algorithmic transparency.
            </p>
          </div>
        </Container>
      </Section>

      <Section theme="light">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="Architectural Pillars"
            title="The 4 Ethical Guarantees"
            subtitle="How we mandate privacy preservation at the hardware layer."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESPONSIBLE_AI_PRINCIPLES.map((principle) => (
              <div key={principle.id} className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-3">
                <h3 className="text-xl font-bold font-heading text-brand-dark">{principle.title}</h3>
                <p className="text-sm text-gray-700 font-medium">{principle.summary}</p>
                <p className="text-xs text-gray-600 font-mono pt-3 border-t border-gray-100 leading-relaxed">
                  {principle.technicalImplementation}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
