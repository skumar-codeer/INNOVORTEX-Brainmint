import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';
import { Shield, Cpu, Lock, Users } from 'lucide-react';
import { COMPANY_NAME, BRAND_TAGLINE } from '@/lib/constants';

export const metadata = {
  title: 'About Us | INNOVORTEX',
  description: 'Learn about INNOVORTEX engineering philosophy, deep-tech background, and commitment to privacy-conscious edge intelligence.',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded border border-brand-cyan/30">
              Deep-Tech Philosophy
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight">
              About {COMPANY_NAME}
            </h1>
            <p className="text-xl text-brand-cyan font-mono">{BRAND_TAGLINE}</p>
            <p className="text-base sm:text-lg text-brand-mutedDark leading-relaxed">
              INNOVORTEX is a deep-tech engineering startup building autonomous Edge AI safety systems to harden institutional perimeters, protect vulnerable spaces, and respect personal privacy.
            </p>
          </div>
        </Container>
      </Section>

      <Section theme="light">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="Core Values"
            title="Our Engineering Foundations"
            subtitle="Built on technical rigor, zero-cloud privacy, and resilient hardware execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-cyan flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">Edge Compute First</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We believe intelligence belongs at the physical boundary. Processing neural models on local hardware eliminates cloud dependency, minimizes latency, and cuts bandwidth costs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-accent flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">Uncompromising Privacy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Safety must never come at the expense of mass surveillance. Our zero-cloud video processing architecture ensures raw video streams never leave volatile local memory.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-alert flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">Hardware Resilience</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our platforms are designed for extreme environments, power grid outages, and zero-broadband rural outposts with integrated battery backup and GSM emergency dispatch.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Team Placeholders Section */}
      <Section theme="dark">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="Engineering Team"
            title="Multidisciplinary Hardware & AI Engineers"
            subtitle="Our team combines expertise across embedded systems, computer vision neural quantization, hardware telemetry, and security infrastructure."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-brand-cardDark border border-brand-borderDark text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-brand-dark border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold font-heading text-white">[Founding Engineering Lead]</h4>
              <p className="text-xs font-mono text-brand-cyan">Embedded Hardware & Systems</p>
              <p className="text-xs text-brand-mutedDark">Focus on ARM micro-architecture and hardware tamper security.</p>
            </div>

            <div className="p-6 rounded-xl bg-brand-cardDark border border-brand-borderDark text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-brand-dark border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold font-heading text-white">[Principal AI Architect]</h4>
              <p className="text-xs font-mono text-brand-cyan">Computer Vision & Neural Quantization</p>
              <p className="text-xs text-brand-mutedDark">Focus on sub-100ms real-time object detection on edge silicon.</p>
            </div>

            <div className="p-6 rounded-xl bg-brand-cardDark border border-brand-borderDark text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-brand-dark border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold font-heading text-white">[Security Infrastructure Director]</h4>
              <p className="text-xs font-mono text-brand-cyan">Field Operations & Telemetry</p>
              <p className="text-xs text-brand-mutedDark">Focus on campus perimeter integration and emergency dispatch.</p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </div>
  );
}
