import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FileText, Shield, Scale, Mail } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | INNOVORTEX',
  description: 'INNOVORTEX company website terms of service and usage guidelines.',
};

export default function TermsPage() {
  return (
    <div className="pt-20 bg-brand-light min-h-screen text-brand-dark">
      <Section theme="light" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="LEGAL NOTICE"
            title="Terms of Service"
            subtitle="Website terms of service governing access to and usage of the INNOVORTEX digital domain."
          />

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-8 text-sm leading-relaxed text-gray-700">
              {/* Introduction */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-brand-dark">
                  <FileText className="w-5 h-5 text-brand-cyan" />
                  <h3 className="text-xl font-bold font-heading">1. Introduction</h3>
                </div>
                <p>
                  Welcome to the INNOVORTEX website. By accessing or utilizing this website, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using our digital platform.
                </p>
              </div>

              {/* Website Use */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-brand-dark">
                  <Shield className="w-5 h-5 text-brand-accent" />
                  <h3 className="text-xl font-bold font-heading">2. Website Use</h3>
                </div>
                <p>
                  This website is provided for informational and demonstration purposes regarding INNOVORTEX, its SafeEdge™ Edge AI safety platform, and associated deep-tech research. Users agree not to misuse form submissions, attempt unauthorized system access, or upload malicious code.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-brand-dark">
                  <Scale className="w-5 h-5 text-brand-alert" />
                  <h3 className="text-xl font-bold font-heading">3. Intellectual Property</h3>
                </div>
                <p>
                  All content, branding, logos, trademarks (including INNOVORTEX and SafeEdge™), system diagrams, code architectures, and page design elements displayed on this website are the intellectual property of INNOVORTEX. Unauthorized reproduction, modification, or distribution is prohibited without prior written consent.
                </p>
              </div>

              {/* Product Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-brand-dark">
                  <FileText className="w-5 h-5 text-brand-cyan" />
                  <h3 className="text-xl font-bold font-heading">4. Product Information</h3>
                </div>
                <p>
                  Product specifications, hardware diagrams, and software dashboard mockups presented on this website represent technical design benchmarks. Formal commercial availability, field trials, and hardware deployment terms are defined in separate bilateral institutional agreements.
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-brand-dark">
                  <Mail className="w-5 h-5 text-brand-cyan" />
                  <h3 className="text-xl font-bold font-heading">5. Contact Information</h3>
                </div>
                <p>
                  If you have any questions regarding these Terms of Service or legal notices, please reach out to us:
                </p>
                <p className="font-mono text-xs text-brand-dark font-semibold">
                  Legal &amp; Governance Team: legal@innovortex.ai
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
