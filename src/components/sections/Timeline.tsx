import React from 'react';
import { RoadmapMilestone } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, Clock, Calendar } from 'lucide-react';

export interface TimelineProps {
  milestones: RoadmapMilestone[];
}

export const Timeline: React.FC<TimelineProps> = ({ milestones }) => {
  return (
    <div className="relative max-w-4xl mx-auto my-12">
      {/* Vertical center bar for timeline */}
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-brand-borderDark transform sm:-translate-x-1/2" />

      <div className="space-y-12">
        {milestones.map((item, idx) => {
          const isCompleted = item.status === 'Completed';
          const isInDev = item.status === 'In Development';
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`relative flex flex-col sm:flex-row items-start ${
                isLeft ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline marker node */}
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-brand-dark border-2 border-brand-cyan flex items-center justify-center z-10">
                {isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                ) : isInDev ? (
                  <Clock className="w-4 h-4 text-brand-cyan animate-pulse" />
                ) : (
                  <Calendar className="w-4 h-4 text-gray-500" />
                )}
              </div>

              {/* Content Card */}
              <div className={`ml-12 sm:ml-0 sm:w-1/2 ${isLeft ? 'sm:pr-12 text-left sm:text-right' : 'sm:pl-12 text-left'}`}>
                <div className="p-6 rounded-xl bg-brand-cardDark border border-brand-borderDark hover:border-brand-cyan/40 transition-colors">
                  <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'sm:justify-end' : 'justify-start'}`}>
                    <span className="text-xs font-mono text-brand-cyan">
                      {item.quarter} {item.year}
                    </span>
                    <Badge variant={isCompleted ? 'accent' : isInDev ? 'cyan' : 'neutral'}>
                      {item.status}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-mutedDark leading-relaxed mb-4">{item.description}</p>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">Deliverables:</span>
                    <ul className="space-y-1">
                      {item.deliverables.map((d, dIdx) => (
                        <li key={dIdx} className="text-xs font-mono text-gray-300">
                          • {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
