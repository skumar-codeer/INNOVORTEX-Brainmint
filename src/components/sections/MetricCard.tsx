import React from 'react';
import { MetricCardItem } from '@/types';
import { Badge } from '@/components/ui/Badge';

export interface MetricCardProps {
  metric: MetricCardItem;
  theme?: 'dark' | 'light';
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`p-6 rounded-xl border flex flex-col justify-between ${
        isDark
          ? 'bg-brand-cardDark border-brand-borderDark text-white'
          : 'bg-white border-gray-200 text-brand-dark shadow-sm'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-brand-mutedDark' : 'text-gray-500'}`}>
            {metric.label}
          </span>
          {metric.isPlaceholder && (
            <Badge variant="alert">Pending Trial Audit</Badge>
          )}
        </div>

        <div className="flex items-baseline space-x-1 my-2">
          <span className={`text-4xl sm:text-5xl font-bold font-heading ${isDark ? 'text-brand-cyan' : 'text-brand-dark'}`}>
            {metric.value}
          </span>
          {metric.unit && (
            <span className={`text-lg font-mono font-medium ${isDark ? 'text-brand-accent' : 'text-emerald-600'}`}>
              {metric.unit}
            </span>
          )}
        </div>
      </div>

      <p className={`text-xs mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {metric.description}
      </p>
    </div>
  );
};
