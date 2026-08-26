import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { DemoRequestForm } from '@/components/forms/DemoRequestForm';
import { Shield, CheckCircle2 } from 'lucide-react';
import { PRIMARY_PRODUCT_NAME } from '@/lib/constants';

export const metadata = {
  title: 'Request a Demo | INNOVORTEX',
  description: 'Book a live hardware and edge AI demonstration of SafeEdge™ safety platform.',
};

export default function RequestDemoPage() {
  return (
    <div className="pt-24">
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono">
              <Shield className="w-4 h-4" />
              <span>{PRIMARY_PRODUCT_NAME} Hardware Demo</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight">
              Experience Edge Safety in Action
            </h1>

            <p className="text-lg text-brand-mutedDark leading-relaxed">
              Schedule a live demonstration with our systems engineers. See how SafeEdge™ detects perimeter breaches, executes on-device inference, and triggers multimodal alerts without cloud video streaming.
            </p>
          </div>
        </Container>
      </Section>

      <Section theme="dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Demo Value Proposition Sidebar */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-heading text-white">What You’ll See in the Demo</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-heading block">Live RPi 5 Compute Bench</strong>
                    <span className="text-gray-400 text-xs font-mono">Sub-100ms frame analysis demonstration on physical edge hardware.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-heading block">Zero-Cloud Privacy Verification</strong>
                    <span className="text-gray-400 text-xs font-mono">Verification of volatile local memory clearing and encrypted telemetry logging.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-heading block">Multimodal Strobe & GSM Dispatch</strong>
                    <span className="text-gray-400 text-xs font-mono">Testing physical siren/strobe triggers and fallback cellular SMS emergency dispatch.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-heading block">Site Boundary Assessment</strong>
                    <span className="text-gray-400 text-xs font-mono">Tailored consultation on node positioning for your facility layout.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Interactive Demo Booking Form */}
            <div className="lg:col-span-2">
              <DemoRequestForm />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
