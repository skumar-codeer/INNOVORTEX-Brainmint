import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DemoRequestForm } from '@/components/forms/DemoRequestForm';
import { ShieldCheck, Cpu, Lock, Radio } from 'lucide-react';

export const metadata = {
  title: 'Request SafeEdge™ Technical Demo | INNOVORTEX',
  description: 'Schedule a tailored hardware demonstration of SafeEdge™ Edge AI safety platform.',
};

export default function RequestDemoPage() {
  return (
    <div className="pt-20 bg-brand-dark min-h-screen text-white">
      <Section theme="dark" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="TAILORED BRIEFING"
            title="Request a Demo"
            subtitle="Schedule a technical briefing and hardware simulation of the SafeEdge™ Edge AI Safety Platform."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
            {/* Left Info Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-brand-cardDark border border-brand-borderDark space-y-5">
                <h3 className="text-xl font-bold font-heading text-white">What the Demo Covers:</h3>
                
                <ul className="space-y-4 text-xs font-mono text-brand-mutedDark">
                  <li className="flex items-start space-x-3">
                    <Cpu className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white block">Edge Neural Execution</strong>
                      Local frame analysis on Raspberry Pi 5 hardware with sub-100ms response.
                    </span>
                  </li>

                  <li className="flex items-start space-x-3">
                    <Lock className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white block">Zero-Cloud Privacy Architecture</strong>
                      Demonstration of optical stream isolation keeping raw video off public clouds.
                    </span>
                  </li>

                  <li className="flex items-start space-x-3">
                    <Radio className="w-4 h-4 text-brand-alert shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white block">Multimodal Siren &amp; GSM Dispatch</strong>
                      Redundant alert channel evaluation including acoustic siren and cellular SMS relay.
                    </span>
                  </li>
                </ul>

                <div className="p-4 rounded-xl bg-brand-dark border border-brand-cyan/30 text-xs font-mono text-brand-cyan">
                  <ShieldCheck className="w-4 h-4 inline-block mr-1.5" />
                  Frontend briefing tailored to educational, residential, healthcare, and industrial perimeters.
                </div>
              </div>
            </div>

            {/* Right Demo Request Form (7 cols) */}
            <div className="lg:col-span-7">
              <DemoRequestForm />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
