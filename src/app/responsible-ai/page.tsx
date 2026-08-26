import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Cpu, Lock, WifiOff, ShieldCheck, Heart } from 'lucide-react';

export const metadata = {
  title: 'Responsible AI Principles | INNOVORTEX',
  description: 'INNOVORTEX responsible AI framework for privacy-conscious edge computer vision.',
};

export default function ResponsibleAIPage() {
  return (
    <div className="pt-20 bg-brand-dark min-h-screen text-white">
      <Section theme="dark" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="ETHICAL FRAMEWORK"
            title="Responsible AI"
            subtitle="Pioneering artificial intelligence engineered to protect human dignity, preserve privacy, and eliminate continuous cloud surveillance risks."
          />

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Principles Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Principle 1: LOCAL PROCESSING */}
              <Card variant="dark" className="p-8 space-y-4 hover:border-brand-cyan/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">LOCAL PROCESSING</h3>
                <p className="text-sm text-brand-mutedDark leading-relaxed">
                  Core AI inference is performed on the edge device. Raw visual streams are evaluated entirely inside local compute memory.
                </p>
              </Card>

              {/* Principle 2: MINIMAL DATA EXPOSURE */}
              <Card variant="dark" className="p-8 space-y-4 hover:border-brand-cyan/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">MINIMAL DATA EXPOSURE</h3>
                <p className="text-sm text-brand-mutedDark leading-relaxed">
                  Avoid unnecessary transmission or storage of visual information. Transient optical frames are discarded immediately after evaluation.
                </p>
              </Card>

              {/* Principle 3: NO CONTINUOUS CLOUD DEPENDENCY */}
              <Card variant="dark" className="p-8 space-y-4 hover:border-brand-cyan/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-alert/10 border border-brand-alert/30 flex items-center justify-center text-brand-alert">
                  <WifiOff className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">NO CONTINUOUS CLOUD DEPENDENCY</h3>
                <p className="text-sm text-brand-mutedDark leading-relaxed">
                  Core detection does not require continuous cloud inference. System perimeters maintain autonomous vigilance even without internet connectivity.
                </p>
              </Card>

              {/* Principle 4: RESPONSIBLE DEPLOYMENT */}
              <Card variant="dark" className="p-8 space-y-4 hover:border-brand-cyan/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">RESPONSIBLE DEPLOYMENT</h3>
                <p className="text-sm text-brand-mutedDark leading-relaxed">
                  Deployment should include appropriate consent, signage, access policies and human oversight. Technology assists human decision-making without replacing ethical accountability.
                </p>
              </Card>
            </div>

            {/* Featured Statement Banner */}
            <div className="p-8 sm:p-12 rounded-2xl bg-brand-cardDark border border-brand-cyan/40 shadow-2xl text-center space-y-4">
              <Heart className="w-10 h-10 text-brand-cyan mx-auto" />
              <blockquote className="text-xl sm:text-2xl font-bold font-heading text-brand-cyan max-w-3xl mx-auto leading-relaxed">
                &quot;Safety technology should protect people without unnecessarily exposing them.&quot;
              </blockquote>
              <p className="text-xs font-mono text-brand-mutedDark uppercase tracking-widest pt-2">
                — INNOVORTEX Responsible AI Commitment
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
