import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MetricCard } from '@/components/sections/MetricCard';
import { CaseStudyCard } from '@/components/sections/CaseStudyCard';
import { CTASection } from '@/components/sections/CTASection';
import { METRIC_CARDS_DATA, IMPACT_SCENARIOS } from '@/data/impact';

export const metadata = {
  title: 'Real-World Impact & Benchmarks | INNOVORTEX',
  description: 'Technical performance metrics, zero-cloud video privacy verification, and perimeter security benchmarks.',
};

export default function ImpactPage() {
  return (
    <div className="pt-24">
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded border border-brand-cyan/30">
              Verifiable Metrics
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight">
              Engineering Safe Spaces with Measurable Impact
            </h1>
            <p className="text-lg text-brand-mutedDark leading-relaxed">
              We quantify success through sub-second threat detection speeds, network bandwidth savings, and total zero-cloud video privacy protection.
            </p>
          </div>
        </Container>
      </Section>

      <Section theme="light">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="Key Performance Benchmarks"
            title="Technical Excellence in Numbers"
            subtitle="Audited engineering metrics and target field trial benchmarks."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {METRIC_CARDS_DATA.map((metric) => (
              <MetricCard key={metric.id} metric={metric} theme="light" />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {IMPACT_SCENARIOS.map((sc, i) => (
              <CaseStudyCard key={i} title={sc.title} description={sc.description} metric={sc.metric} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </div>
  );
}
