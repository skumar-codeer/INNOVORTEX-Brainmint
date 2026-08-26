import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SolutionCard } from '@/components/sections/SolutionCard';
import { CTASection } from '@/components/sections/CTASection';
import { SOLUTIONS_DATA } from '@/data/solutions';

export const metadata = {
  title: 'Industry Solutions | INNOVORTEX',
  description: 'Tailored edge AI safety solutions for Women\'s Hostels, Campuses, Workplaces, Healthcare, Public Infra, and Rural areas.',
};

export default function SolutionsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded border border-brand-cyan/30">
              Domain Deployment Matrix
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight">
              Target Safety Solutions
            </h1>
            <p className="text-lg text-brand-mutedDark leading-relaxed">
              Discover how SafeEdge™ protects sensitive perimeters across 6 key domain verticals without compromising privacy or network bandwidth.
            </p>
          </div>
        </Container>
      </Section>

      {/* Solutions Grid */}
      <Section theme="light">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="Vertical Architectures"
            title="Tailored Perimeter Vigilance Across Sectors"
            subtitle="Customized deployment profiles for high-vulnerability environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS_DATA.map((solution) => (
              <SolutionCard key={solution.slug} solution={solution} theme="light" />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </div>
  );
}
