import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Timeline } from '@/components/sections/Timeline';
import { CTASection } from '@/components/sections/CTASection';
import { ROADMAP_DATA } from '@/data/roadmap';

export const metadata = {
  title: 'Engineering Roadmap | INNOVORTEX',
  description: 'Technical development timeline and product evolution milestones for SafeEdge™ platform.',
};

export default function RoadmapPage() {
  return (
    <div className="pt-24">
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded border border-brand-cyan/30">
              Technical Evolution
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight">
              Engineering Roadmap
            </h1>
            <p className="text-lg text-brand-mutedDark leading-relaxed">
              Tracking our development milestones from custom Raspberry Pi 5 carrier boards to field validation and next-generation ultra-low-power edge NPU silicon.
            </p>
          </div>
        </Container>
      </Section>

      <Section theme="dark">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="Milestones & Deliverables"
            title="SafeEdge™ Development Phases"
            subtitle="Transparent engineering timeline documenting delivered benchmarks and upcoming features."
          />

          <Timeline milestones={ROADMAP_DATA} />
        </Container>
      </Section>

      <CTASection />
    </div>
  );
}
