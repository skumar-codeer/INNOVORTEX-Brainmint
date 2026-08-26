import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Shield, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-brand-dark text-white overflow-hidden border-b border-brand-borderDark/60">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E2D4215_1px,transparent_1px),linear-gradient(to_bottom,#1E2D4215_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Top Eyebrow Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono tracking-wider uppercase">
            <Shield className="w-4 h-4 text-brand-cyan" />
            <span>SafeEdge™ Edge AI Safety & Alert Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white leading-[1.1]">
            Intelligence That Doesn’t Just Watch.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-[#52E2FF] to-brand-accent">
              It Responds.
            </span>
          </h1>

          {/* Supporting Message */}
          <p className="text-lg sm:text-xl text-brand-mutedDark max-w-2xl mx-auto font-body leading-relaxed">
            INNOVORTEX builds privacy-conscious Edge AI systems that transform conventional surveillance into intelligent, real-time safety infrastructure.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button href="/request-demo" variant="primary" size="lg">
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="/technology" variant="outline" size="lg">
              Explore Our Technology
            </Button>
          </div>

          {/* Technical Hardware Highlights Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-brand-borderDark/40">
            <div className="p-3 rounded bg-brand-cardDark/50 border border-brand-borderDark/60">
              <div className="text-[11px] font-mono text-brand-mutedDark">Compute Node</div>
              <div className="text-xs font-bold text-white font-mono mt-0.5">Raspberry Pi 5</div>
            </div>
            <div className="p-3 rounded bg-brand-cardDark/50 border border-brand-borderDark/60">
              <div className="text-[11px] font-mono text-brand-mutedDark">Inference Latency</div>
              <div className="text-xs font-bold text-brand-cyan font-mono mt-0.5">&lt; 100ms On-Device</div>
            </div>
            <div className="p-3 rounded bg-brand-cardDark/50 border border-brand-borderDark/60">
              <div className="text-[11px] font-mono text-brand-mutedDark">Privacy Protection</div>
              <div className="text-xs font-bold text-brand-accent font-mono mt-0.5">Zero-Cloud Video</div>
            </div>
            <div className="p-3 rounded bg-brand-cardDark/50 border border-brand-borderDark/60">
              <div className="text-[11px] font-mono text-brand-mutedDark">Alert Modality</div>
              <div className="text-xs font-bold text-brand-alert font-mono mt-0.5">Multimodal + GSM</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
