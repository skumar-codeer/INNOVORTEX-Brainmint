import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, MapPin } from 'lucide-react';
import { CONTACT_EMAIL } from '@/lib/constants';

export const metadata = {
  title: 'Contact Engineering | INNOVORTEX',
  description: 'Get in touch with INNOVORTEX technical team for inquiries, pilot deployments, and partnership inquiries.',
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded border border-brand-cyan/30">
              Direct Engineering Inquiry
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg text-brand-mutedDark leading-relaxed">
              Have technical questions regarding SafeEdge™ hardware, edge neural models, or pilot trial deployments? Speak directly with our engineering team.
            </p>
          </div>
        </Container>
      </Section>

      <Section theme="dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Information Panel */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-heading text-white">Engineering HQ</h3>
              <p className="text-sm text-brand-mutedDark leading-relaxed">
                Our R&D laboratory and systems deployment headquarters focus on continuous hardware validation and edge AI optimization.
              </p>

              <div className="space-y-4 pt-4 border-t border-brand-borderDark">
                <div className="flex items-start space-x-3 text-sm">
                  <Mail className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-gray-400 block">General Inquiries:</span>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:text-brand-cyan font-mono">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-gray-400 block">Deployment Laboratory:</span>
                    <span className="text-gray-300 font-mono">
                      [INNOVORTEX Deep-Tech R&D Facility]<br />
                      Tech Innovation Corridor<br />
                      India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
