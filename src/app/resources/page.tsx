import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FileText, BookOpen, Newspaper, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Resources & Technical Publications | INNOVORTEX',
  description: 'Technical resources, product documentation, and research updates from INNOVORTEX.',
};

export default function ResourcesPage() {
  return (
    <div className="pt-20 bg-brand-light min-h-screen">
      <Section theme="light" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="DOCUMENTATION &amp; INSIGHTS"
            title="Resources"
            subtitle="Access technical materials, product specifications, and research insights regarding SafeEdge™ Edge AI safety architecture."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: PRODUCT BROCHURE */}
            <Card variant="light" className="p-8 space-y-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <Badge variant="cyan">Placeholder</Badge>
                </div>

                <h3 className="text-xl font-bold font-heading text-brand-dark">PRODUCT BROCHURE</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Learn more about the SafeEdge™ platform.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <p className="text-xs font-mono text-gray-500">
                  Comprehensive overview of hardware specifications, local neural model latency benchmarks, and mounting requirements.
                </p>
                <Button href="/request-demo" variant="outline" size="sm" className="w-full">
                  Request Brochure PDF <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </Card>

            {/* Card 2: RESEARCH / PUBLICATIONS */}
            <Card variant="light" className="p-8 space-y-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <Badge variant="accent">R&amp;D In Progress</Badge>
                </div>

                <h3 className="text-xl font-bold font-heading text-brand-dark">RESEARCH / PUBLICATIONS</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Explore research and technical work from INNOVORTEX.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <p className="text-xs font-mono text-gray-500">
                  Technical whitepapers on sub-100ms model quantization, zero-cloud privacy architecture, and micro-NPU edge compute performance.
                </p>
                <div className="text-xs font-mono text-gray-400 bg-gray-100 px-3 py-2 rounded text-center">
                  Publication Pending Technical Review
                </div>
              </div>
            </Card>

            {/* Card 3: NEWS & UPDATES */}
            <Card variant="light" className="p-8 space-y-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-alert flex items-center justify-center">
                    <Newspaper className="w-6 h-6" />
                  </div>
                  <Badge variant="alert">Updates</Badge>
                </div>

                <h3 className="text-xl font-bold font-heading text-brand-dark">NEWS &amp; UPDATES</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Follow product development and company updates.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <p className="text-xs font-mono text-gray-500">
                  Development roadmap announcements, prototype testing milestones, and engineering field logs.
                </p>
                <div className="text-xs font-mono text-gray-400 bg-gray-100 px-3 py-2 rounded text-center">
                  Check Roadmap Page for Milestones
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
