import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/product/ProductCard';
import { TechnologyCard } from '@/components/sections/TechnologyCard';
import { SystemDiagram } from '@/components/technology/SystemDiagram';
import { DashboardMockup } from '@/components/dashboard/DashboardMockup';
import { MetricCard } from '@/components/sections/MetricCard';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';

import { SAFEEDGE_PRODUCT_DATA } from '@/data/products';
import { TECHNOLOGY_STACK_DATA } from '@/data/technology';
import { METRIC_CARDS_DATA, IMPACT_SCENARIOS } from '@/data/impact';
import { ShieldAlert, ArrowRight, Lock, EyeOff } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION (DARK) */}
      <Hero />

      {/* 2. PROBLEM STATEMENT SECTION (LIGHT) */}
      <Section theme="light">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="The Security Paradox"
            title="Conventional CCTV Watches. It Doesn’t Protect."
            subtitle="Legacy surveillance systems stream terabytes of unencrypted video to distant servers, creating privacy risks while doing nothing to deter active boundary threats in real time."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">Delayed Human Intervention</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Passive cameras only provide video footage after an incident has occurred, leaving guards unaware until it is too late to intervene.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <EyeOff className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">Privacy Vulnerabilities</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Continuous 24/7 video streaming invades resident and worker privacy, violating regulations and exposing sensitive areas to data leaks.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">Single Point Connectivity Failure</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cloud-bound security solutions fail completely during internet outages or power grid failures, leaving off-grid campuses unprotected.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. PRODUCT HIGHLIGHT SECTION: SafeEdge™ (DARK) */}
      <Section theme="dark" id="product">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="Flagship Edge Platform"
            title="SafeEdge™ — Autonomous Edge AI & Multimodal Alerting"
            subtitle={SAFEEDGE_PRODUCT_DATA.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFEEDGE_PRODUCT_DATA.keyFeatures.map((feature) => (
              <ProductCard key={feature.id} feature={feature} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/products/safeedge" variant="primary" size="lg">
              Explore Full SafeEdge™ Hardware Specifications <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* 4. TECHNOLOGY & ARCHITECTURE SECTION (LIGHT) */}
      <Section theme="light" id="technology">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="Deep-Tech Engine"
            title="Raspberry Pi 5 Driven Edge Intelligence"
            subtitle="Discover how SafeEdge™ combines dual-stage PIR optical sensing, quantized local neural networks, and multimodal alert relays into a sub-100ms decision pipeline."
          />

          {/* System Flow Interactive Visualization */}
          <SystemDiagram />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {TECHNOLOGY_STACK_DATA.map((tech) => (
              <TechnologyCard key={tech.id} tech={tech} theme="light" />
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. DASHBOARD & SYSTEM MONITORING SECTION (DARK) */}
      <Section theme="dark" id="dashboard">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="Operational Control Console"
            title="Real-Time Hardware & Event Dashboard"
            subtitle="Designed for security desks and facility commanders to monitor node health, sensor telemetry, and live threat dispatches without cloud dependency."
          />

          {/* SafeEdge Console Mockup */}
          <DashboardMockup />
        </Container>
      </Section>

      {/* 6. IMPACT & DEPLOYMENT BENCHMARKS (LIGHT) */}
      <Section theme="light" id="impact">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="Real-World Impact"
            title="Measurable Protection Benchmarks"
            subtitle="Engineering metrics and real-world deployment goals for sensitive institutional perimeters."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {METRIC_CARDS_DATA.map((metric) => (
              <MetricCard key={metric.id} metric={metric} theme="light" />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {IMPACT_SCENARIOS.map((sc, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-3">
                <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-dark px-2.5 py-1 rounded">
                  {sc.metric}
                </span>
                <h3 className="text-xl font-bold font-heading text-brand-dark mt-2">{sc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{sc.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. CALL TO ACTION SECTION (DARK) */}
      <CTASection />
    </>
  );
}
