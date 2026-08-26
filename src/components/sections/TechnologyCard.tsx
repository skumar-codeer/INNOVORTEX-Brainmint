import React from 'react';
import { TechStackArea } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Cpu, CheckCircle } from 'lucide-react';

export interface TechnologyCardProps {
  tech: TechStackArea;
  theme?: 'dark' | 'light';
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
        isDark
          ? 'bg-brand-cardDark border-brand-borderDark text-white hover:border-brand-cyan/40'
          : 'bg-white border-gray-200 text-brand-dark hover:border-brand-dark/30 shadow-sm'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <Badge variant={isDark ? 'cyan' : 'neutral'}>{tech.category}</Badge>
          <Cpu className={`w-5 h-5 ${isDark ? 'text-brand-cyan' : 'text-brand-dark'}`} />
        </div>

        <h3 className="text-xl font-bold font-heading mb-2">{tech.title}</h3>
        <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-brand-mutedDark' : 'text-gray-600'}`}>
          {tech.description}
        </p>

        <ul className="space-y-2">
          {tech.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-xs font-mono">
              <CheckCircle
                className={`w-3.5 h-3.5 mr-2 shrink-0 mt-0.5 ${
                  isDark ? 'text-brand-accent' : 'text-emerald-600'
                }`}
              />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
