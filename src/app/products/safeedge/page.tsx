import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/product/ProductCard';
import { SystemDiagram } from '@/components/technology/SystemDiagram';
import { DashboardMockup } from '@/components/dashboard/DashboardMockup';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { SAFEEDGE_PRODUCT_DATA } from '@/data/products';
import { Shield, Cpu, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'SafeEdge™ Platform | INNOVORTEX',
  description: 'Technical specifications, hardware architecture, and features of SafeEdge™ Edge AI Safety & Alert Platform.',
};

export default function SafeEdgeProductPage() {
  return (
    <div className="pt-24">
      {/* Product Hero */}
      <Section theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono">
              <Shield className="w-4 h-4" />
              <span>Flagship Edge Hardware Platform</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight">
              SafeEdge™ Platform
            </h1>

            <p className="text-xl text-brand-cyan font-mono">{SAFEEDGE_PRODUCT_DATA.tagline}</p>

            <p className="text-base sm:text-lg text-brand-mutedDark leading-relaxed">
              {SAFEEDGE_PRODUCT_DATA.description}
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <Button href="/request-demo" variant="primary" size="lg">
                Request Hardware Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature Cards */}
      <Section theme="light">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="Key Platform Capabilities"
            title="Engineered for Zero-Trust Perimeters"
            subtitle="Explore the fundamental hardware and software capabilities built into every SafeEdge™ node."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFEEDGE_PRODUCT_DATA.keyFeatures.map((feature) => (
              <ProductCard key={feature.id} feature={feature} />
            ))}
          </div>
        </Container>
      </Section>

      {/* System Pipeline */}
      <Section theme="dark">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="Hardware Flow"
            title="The 5-Stage SafeEdge™ Decision Engine"
            subtitle="From physical motion to siren dispatch and human intervention."
          />

          <SystemDiagram />
        </Container>
      </Section>

      {/* Full Technical Specifications Matrix */}
      <Section theme="light" id="specs">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="Datasheet"
            title="Technical Hardware Specifications"
            subtitle="Comprehensive specifications for engineering review and procurement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SAFEEDGE_PRODUCT_DATA.specifications.map((cat, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold font-heading text-brand-dark pb-2 border-b border-gray-100 flex items-center">
                  <Cpu className="w-5 h-5 text-brand-cyan mr-2" /> {cat.category}
                </h3>
                <div className="space-y-3">
                  {cat.specifications.map((spec, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-start text-xs font-mono">
                      <span className="text-gray-500 font-medium">{spec.label}:</span>
                      <span className="text-brand-dark font-semibold text-right max-w-xs">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Live Console Preview */}
      <Section theme="dark">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="Control Interface"
            title="Local Console Interface"
            subtitle="Local telemetry monitoring interface for security command posts."
          />

          <DashboardMockup />
        </Container>
      </Section>

      <CTASection />
    </div>
  );
}
