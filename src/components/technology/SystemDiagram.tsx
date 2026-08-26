'use client';

import React, { useState } from 'react';
import { HOW_IT_WORKS_PIPELINE } from '@/data/products';
import { Camera, Cpu, ShieldAlert, Bell, UserCheck, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SystemDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6" />;
      case 'Bell':
        return <Bell className="w-6 h-6" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6" />;
      default:
        return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-brand-cardDark/80 border border-brand-borderDark rounded-xl p-6 sm:p-8 backdrop-blur-md">
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-brand-borderDark">
        <div>
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase">System Architecture Flow</span>
          <h3 className="text-xl font-bold font-heading text-white mt-1">End-to-End SafeEdge™ Pipeline</h3>
        </div>
        <div className="hidden sm:block text-xs font-mono text-brand-mutedDark bg-brand-dark px-3 py-1.5 rounded border border-brand-borderDark">
          Pipeline Latency: &lt; 100ms
        </div>
      </div>

      {/* Horizontal Pipeline Steps */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {HOW_IT_WORKS_PIPELINE.map((step) => {
          const isActive = activeStep === step.stepNumber;
          return (
            <div
              key={step.stepNumber}
              onClick={() => setActiveStep(step.stepNumber)}
              className={cn(
                'relative flex flex-col p-4 rounded-lg cursor-pointer transition-all duration-200 border',
                isActive
                  ? 'bg-brand-cyan/10 border-brand-cyan text-white shadow-lg shadow-brand-cyan/5'
                  : 'bg-brand-dark/60 border-brand-borderDark text-gray-400 hover:border-gray-600 hover:text-gray-200'
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={cn(
                    'w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold border',
                    isActive
                      ? 'bg-brand-cyan text-brand-dark border-brand-cyan'
                      : 'bg-brand-borderDark text-gray-400 border-gray-700'
                  )}
                >
                  {step.stepNumber}
                </span>
                <div className={isActive ? 'text-brand-cyan' : 'text-gray-500'}>{getIcon(step.iconName)}</div>
              </div>

              <h4 className="text-sm font-bold font-heading tracking-wide uppercase mb-1">{step.title}</h4>
              <p className="text-xs text-gray-400 line-clamp-2">{step.description}</p>
            </div>
          );
        })}
      </div>

      {/* Detail Inspector Card */}
      {HOW_IT_WORKS_PIPELINE.find((s) => s.stepNumber === activeStep) && (
        <div className="mt-8 p-6 bg-brand-dark/90 border border-brand-cyan/30 rounded-lg text-white">
          {(() => {
            const step = HOW_IT_WORKS_PIPELINE.find((s) => s.stepNumber === activeStep)!;
            return (
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/30">
                      STEP 0{step.stepNumber} INSPECTION
                    </span>
                    <h4 className="text-lg font-bold font-heading">{step.title} STAGE</h4>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-brand-borderDark pt-4 md:pt-0 md:pl-6 space-y-2">
                  <div className="text-xs font-mono text-brand-mutedDark uppercase tracking-wider">
                    Technical Specifications
                  </div>
                  <ul className="space-y-1">
                    {step.techDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-xs font-mono text-gray-300">
                        <ChevronRight className="w-3.5 h-3.5 text-brand-cyan mr-1.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
