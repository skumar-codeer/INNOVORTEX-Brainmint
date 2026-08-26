import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface CaseStudyCardProps {
  title: string;
  description: string;
  metric: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, metric }) => {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between hover:border-brand-dark/30 transition-all">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-brand-dark text-white flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <Badge variant="neutral">{metric}</Badge>
        </div>

        <h3 className="text-xl font-bold font-heading text-brand-dark mb-3">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <Button href="/solutions" variant="secondary" size="sm">
          Explore Scenario <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
        </Button>
      </div>
    </div>
  );
};
