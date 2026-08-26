import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Shield, ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-brand-dark text-white border-t border-brand-borderDark/60 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
        <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mx-auto">
          <Shield className="w-6 h-6" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold font-heading tracking-tight text-white leading-tight">
          Ready to Upgrade Your Space into Intelligent Safety Infrastructure?
        </h2>

        <p className="text-base sm:text-lg text-brand-mutedDark font-body leading-relaxed max-w-xl mx-auto">
          Schedule a technical demonstration or consult directly with our engineering team to evaluate SafeEdge™ for your facility perimeters.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button href="/request-demo" variant="primary" size="lg">
            Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Engineering Team
          </Button>
        </div>
      </Container>
    </section>
  );
};
