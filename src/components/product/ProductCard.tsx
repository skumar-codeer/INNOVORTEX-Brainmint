import React from 'react';
import { ProductFeature } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Shield } from 'lucide-react';

export interface ProductCardProps {
  feature: ProductFeature;
}

export const ProductCard: React.FC<ProductCardProps> = ({ feature }) => {
  return (
    <div className="p-6 rounded-xl bg-brand-cardDark border border-brand-borderDark hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between text-white group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-colors">
            <Shield className="w-5 h-5" />
          </div>
          {feature.badge && <Badge variant="cyan">{feature.badge}</Badge>}
        </div>

        <h3 className="text-lg font-bold font-heading mb-2 text-white group-hover:text-brand-cyan transition-colors">
          {feature.title}
        </h3>

        <p className="text-sm text-brand-mutedDark leading-relaxed font-body">
          {feature.description}
        </p>
      </div>

      {feature.metricsPlaceholder && (
        <div className="mt-6 pt-4 border-t border-brand-borderDark/60 flex items-center justify-between text-xs font-mono text-gray-400">
          <span>Benchmark:</span>
          <span className="text-brand-accent font-semibold">{feature.metricsPlaceholder}</span>
        </div>
      )}
    </div>
  );
};
