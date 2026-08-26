import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Cpu, Lock, WifiOff, ShieldCheck, UserCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy & Core Data Governance | INNOVORTEX',
  description: 'INNOVORTEX privacy principles detailing local edge processing, data isolation, and responsible AI deployment.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-20 bg-brand-light min-h-screen text-brand-dark">
      <Section theme="light" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="DATA GOVERNANCE"
            title="Privacy Policy"
            subtitle="INNOVORTEX is committed to privacy-conscious engineering. Our edge-first architecture is designed to respect individual dignity and protect sensitive physical spaces."
          />

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Principles Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. Local Processing */}
              <Card variant="light" className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-cyan flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Local Processing</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Optical feeds and sensor inputs are evaluated locally on edge compute hardware. Raw video frames never leave physical local memory.
                </p>
              </Card>

              {/* 2. Minimal Data Exposure */}
              <Card variant="light" className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-accent flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Minimal Data Exposure</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Avoid unnecessary transmission or storage of visual information. Only transient anomaly metadata is processed during event evaluation.
                </p>
              </Card>

              {/* 3. No Continuous Cloud Dependency */}
              <Card variant="light" className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-alert flex items-center justify-center">
                  <WifiOff className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">No Continuous Cloud Dependency</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Core safety detection operates independently off-grid without requiring continuous streaming to central cloud databases.
                </p>
              </Card>

              {/* 4. Responsible Deployment */}
              <Card variant="light" className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-cyan flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Responsible Deployment</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Deployment guidelines emphasize clear perimeter signage, explicit consent protocols, and strict access governance for sensitive environments.
                </p>
              </Card>
            </div>

            {/* Structured Legal Content */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-8 text-sm leading-relaxed text-gray-700">
              <div className="space-y-3">
                <h3 className="text-xl font-bold font-heading text-brand-dark">1. Human Oversight</h3>
                <p>
                  SafeEdge™ systems are engineered as decision-assist tools for security personnel. Automated alert dispatches are designed to assist human responders, with critical security decisions remaining under authorized human oversight.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold font-heading text-brand-dark">2. Website Data Processing</h3>
                <p>
                  Information submitted through our website contact and demo request forms (such as name, work email, and organization) is used exclusively to respond to inquiries and discuss technical deployments. INNOVORTEX does not sell or distribute personal information to third parties.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold font-heading text-brand-dark">3. Policy Updates</h3>
                <p>
                  This Privacy Policy is subject to alignment with our evolving product engineering and operational governance standards.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center space-x-3 text-xs font-mono text-gray-500">
                <UserCheck className="w-4 h-4 text-brand-dark shrink-0" />
                <span>For privacy governance questions, contact: privacy@innovortex.ai</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
