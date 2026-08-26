import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechnologyCard } from '@/components/sections/TechnologyCard';
import { SystemDiagram } from '@/components/technology/SystemDiagram';
import { CTASection } from '@/components/sections/CTASection';
import { TECHNOLOGY_STACK_DATA } from '@/data/technology';

export const metadata = {
  title: 'Technology & Architecture | INNOVORTEX',
  description: 'Deep-dive into Raspberry Pi 5 compute hardware, on-device CV inference, PIR sensing, and multimodal alerts.',
};

export default function TechnologyPage() {
  return (
    <div className="pt-24">
      {/* Tech Hero */}
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded border border-brand-cyan/30">
              Deep-Tech Architecture
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight">
              Engineering Privacy-Conscious Edge Intelligence
            </h1>
            <p className="text-lg text-brand-mutedDark leading-relaxed">
              INNOVORTEX replaces latency-prone cloud video streaming with high-throughput, low-latency edge neural inference deployed directly on industrial micro-hardware.
            </p>
          </div>
        </Container>
      </Section>

      {/* System Pipeline */}
      <Section theme="light">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="Pipeline Visualization"
            title="The Edge Safety Decision Engine"
            subtitle="Conceptual breakdown from optical sensing to GSM alert dispatch."
          />

          <SystemDiagram />
        </Container>
      </Section>

      {/* Tech Areas Grid */}
      <Section theme="dark">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="Core Hardware & AI Pillars"
            title="4 Pillars of INNOVORTEX Technology"
            subtitle="Explore our compute nodes, model optimization, sensor fusion, and resilient cellular communications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TECHNOLOGY_STACK_DATA.map((tech) => (
              <TechnologyCard key={tech.id} tech={tech} theme="dark" />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </div>
  );
}
