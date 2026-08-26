import React from 'react';
import { SolutionVertical } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, GraduationCap, Building2, Hospital, Landmark, WifiOff, ArrowRight } from 'lucide-react';

export interface SolutionCardProps {
  solution: SolutionVertical;
  theme?: 'dark' | 'light';
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ solution, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'Hospital':
        return <Hospital className="w-6 h-6" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6" />;
      case 'WifiOff':
        return <WifiOff className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <div
      id={solution.slug}
      className={`p-6 sm:p-8 rounded-xl border transition-all duration-300 flex flex-col justify-between scroll-mt-24 ${
        isDark
          ? 'bg-brand-cardDark border-brand-borderDark text-white hover:border-brand-cyan/40'
          : 'bg-white border-gray-200 text-brand-dark shadow-sm hover:shadow-md'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isDark ? 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30' : 'bg-brand-dark text-white'
            }`}
          >
            {renderIcon(solution.icon)}
          </div>
          <Badge variant={isDark ? 'cyan' : 'neutral'}>{solution.pilotStatusBadge}</Badge>
        </div>

        <h3 className="text-2xl font-bold font-heading mb-2">{solution.title}</h3>
        <p className={`text-sm font-medium mb-4 ${isDark ? 'text-brand-cyan' : 'text-gray-700'}`}>
          {solution.subtitle}
        </p>
        <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-brand-mutedDark' : 'text-gray-600'}`}>
          {solution.description}
        </p>

        <div className="space-y-4 pt-4 border-t border-gray-700/30">
          <div>
            <h4 className="text-xs font-mono tracking-wider uppercase font-semibold text-brand-alert mb-2">
              Operational Challenges Solved:
            </h4>
            <ul className="space-y-1">
              {solution.challenges.map((c, i) => (
                <li key={i} className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  • {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`text-xs font-mono tracking-wider uppercase font-semibold mb-2 ${
                isDark ? 'text-brand-accent' : 'text-emerald-700'
              }`}
            >
              INNOVORTEX Edge AI Solution:
            </h4>
            <ul className="space-y-1">
              {solution.innovortexApproach.map((a, i) => (
                <li key={i} className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  ✓ {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-700/30 flex items-center justify-between">
        <Button href="/request-demo" variant={isDark ? 'outline' : 'secondary'} size="sm">
          Deploy Solution <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
        </Button>
      </div>
    </div>
  );
};
