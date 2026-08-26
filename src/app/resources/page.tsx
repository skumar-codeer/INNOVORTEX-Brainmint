import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { RESOURCES_DATA } from '@/data/resources';
import { Download } from 'lucide-react';

export const metadata = {
  title: 'Resources & Publications | INNOVORTEX',
  description: 'Download product brochures, technical whitepapers, and research updates on Edge AI safety.',
};

export default function ResourcesPage() {
  return (
    <div className="pt-24">
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded border border-brand-cyan/30">
              Technical Documentation
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight">
              Resources & Publications
            </h1>
            <p className="text-lg text-brand-mutedDark leading-relaxed">
              Explore product brochures, engineering research papers, and news updates on privacy-conscious edge intelligence.
            </p>
          </div>
        </Container>
      </Section>

      <Section theme="light">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="Whitepapers & Downloads"
            title="Technical Publications Library"
            subtitle="In-depth technical guides for security consultants, facility directors, and system integrators."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES_DATA.map((res) => (
              <div key={res.id} className="p-6 sm:p-8 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="cyan">{res.category}</Badge>
                    <span className="text-xs font-mono text-gray-500">{res.date}</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-brand-dark mb-3">{res.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{res.abstract}</p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500">{res.readTime}</span>
                  <Button href="#" variant="secondary" size="sm">
                    <Download className="w-3.5 h-3.5 mr-1.5" /> Download PDF
                  </Button>
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
