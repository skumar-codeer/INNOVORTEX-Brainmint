import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';
import { Sparkles, Network, Lock } from 'lucide-react';
import { BRAND_POSITIONING } from '@/lib/constants';

export const metadata = {
  title: 'Company Vision | INNOVORTEX',
  description: 'The future of intelligent, privacy-conscious safety infrastructure.',
};

export default function VisionPage() {
  return (
    <div className="pt-24">
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded border border-brand-cyan/30">
              Future of Safety Infrastructure
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight">
              Our Vision: {BRAND_POSITIONING}
            </h1>
            <p className="text-lg text-brand-mutedDark leading-relaxed">
              We envision a world where physical spaces actively protect human life through resilient edge intelligence, without subjecting citizens to invasive surveillance or central cloud control.
            </p>
          </div>
        </Container>
      </Section>

      <Section theme="light">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="Architectural Evolution"
            title="Beyond Passive Monitoring"
            subtitle="How INNOVORTEX is pioneering the transition from passive video recording to active, privacy-first safety nodes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-3">
              <Sparkles className="w-8 h-8 text-brand-cyan" />
              <h3 className="text-xl font-bold font-heading text-brand-dark">Autonomous Edge Nodes</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Transforming static hardware into self-contained decision nodes that detect, analyze, and dispatch emergency signals in sub-second timeframes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-3">
              <Network className="w-8 h-8 text-emerald-600" />
              <h3 className="text-xl font-bold font-heading text-brand-dark">Decentralized Mesh Vigilance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Interconnected edge clusters that share threat telemetry locally across building perimeters without requiring central cloud infrastructure.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-3">
              <Lock className="w-8 h-8 text-brand-alert" />
              <h3 className="text-xl font-bold font-heading text-brand-dark">Zero-Trust Privacy Standard</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Establishing zero-cloud video retention as the global standard for public and institutional perimeter security.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </div>
  );
}
