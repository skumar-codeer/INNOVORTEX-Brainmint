import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, MapPin, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Contact Engineering Team | INNOVORTEX',
  description: 'Connect with INNOVORTEX to explore Edge AI safety technology for your facility.',
};

export default function ContactPage() {
  return (
    <div className="pt-20 bg-brand-dark min-h-screen text-white">
      <Section theme="dark" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="GET IN TOUCH"
            title="Let's Build Safer, Smarter Spaces."
            subtitle="Partner with INNOVORTEX to bring intelligent safety technology into real-world environments."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
            {/* Left Info Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-6 rounded-2xl bg-brand-cardDark border border-brand-borderDark space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white">INNOVORTEX</h3>
                    <p className="text-xs font-mono text-brand-cyan">Deep-Tech Edge AI Engineering</p>
                  </div>
                </div>

                <p className="text-sm text-brand-mutedDark leading-relaxed">
                  We invite technical collaboration with institution administrators, facility security leaders, and system integrators committed to non-cloud perimeter safety.
                </p>

                <div className="space-y-4 pt-4 border-t border-brand-borderDark text-xs font-mono text-gray-300">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-400 block">Engineering Inquiries:</span>
                      <span className="text-white font-semibold">contact@innovortex.ai</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-400 block">Development Hub:</span>
                      <span className="text-white font-semibold">India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
