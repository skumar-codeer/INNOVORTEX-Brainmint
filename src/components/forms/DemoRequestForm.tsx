'use client';

import React, { useState } from 'react';
import { DemoRequestFormInputs } from '@/types';
import { validateDemoRequestForm } from '@/lib/validation';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';

export const DemoRequestForm: React.FC = () => {
  const [inputs, setInputs] = useState<DemoRequestFormInputs>({
    fullName: '',
    workEmail: '',
    organizationName: '',
    organizationType: 'Educational Institution / Campus',
    deploymentTimeline: 'Within 3 Months',
    primaryConcern: "Women's Safety & Perimeter Vigilance",
    additionalNotes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof DemoRequestFormInputs, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateDemoRequestForm(inputs);
    setErrors(result.errors);

    if (result.isValid) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/demo-request', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });
        const payload = await response.json();

        if (!response.ok) {
          setErrors(payload.errors ?? {});
          return;
        }

        setSubmitted(true);
      } catch {
        setErrors({ additionalNotes: 'Unable to submit right now. Please try again shortly.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-xl bg-brand-cardDark border border-brand-cyan/40 text-center space-y-4">
        <ShieldCheck className="w-12 h-12 text-brand-accent mx-auto" />
        <h3 className="text-2xl font-bold font-heading text-white">Demo Request Submitted</h3>
        <p className="text-sm text-brand-mutedDark max-w-md mx-auto">
          Thank you for requesting a SafeEdge™ technical demo. Our deployment team will reach out to arrange a tailored technical briefing and hardware demonstration.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-xl bg-brand-cardDark border border-brand-borderDark space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
            Full Name <span className="text-brand-alert">*</span>
          </label>
          <input
            type="text"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            placeholder="Sarah Jenkins"
            className="w-full px-4 py-2.5 rounded bg-brand-dark border border-brand-borderDark text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm"
          />
          {errors.fullName && <p className="text-xs text-brand-danger mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
            Work Email <span className="text-brand-alert">*</span>
          </label>
          <input
            type="email"
            value={inputs.workEmail}
            onChange={(e) => setInputs({ ...inputs, workEmail: e.target.value })}
            placeholder="s.jenkins@campus-security.org"
            className="w-full px-4 py-2.5 rounded bg-brand-dark border border-brand-borderDark text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm"
          />
          {errors.workEmail && <p className="text-xs text-brand-danger mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.workEmail}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
            Organization Name <span className="text-brand-alert">*</span>
          </label>
          <input
            type="text"
            value={inputs.organizationName}
            onChange={(e) => setInputs({ ...inputs, organizationName: e.target.value })}
            placeholder="Global Educational Campus"
            className="w-full px-4 py-2.5 rounded bg-brand-dark border border-brand-borderDark text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm"
          />
          {errors.organizationName && <p className="text-xs text-brand-danger mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.organizationName}</p>}
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-gray-300 mb-2">Organization Type</label>
          <select
            value={inputs.organizationType}
            onChange={(e) => setInputs({ ...inputs, organizationType: e.target.value })}
            className="w-full px-4 py-2.5 rounded bg-brand-dark border border-brand-borderDark text-white focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm"
          >
            <option>Women&apos;s Hostel / Residential Complex</option>
            <option>Educational Institution / Campus</option>
            <option>Corporate Workplace / Facility</option>
            <option>Healthcare Facility / Hospital</option>
            <option>Public Infrastructure / Utility Zone</option>
            <option>Rural / Off-Grid Site</option>
            <option>System Integrator / Partner</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono uppercase text-gray-300 mb-2">Planned Deployment Timeline</label>
          <select
            value={inputs.deploymentTimeline}
            onChange={(e) => setInputs({ ...inputs, deploymentTimeline: e.target.value })}
            className="w-full px-4 py-2.5 rounded bg-brand-dark border border-brand-borderDark text-white focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm"
          >
            <option>Immediate / Next 30 Days</option>
            <option>Within 3 Months</option>
            <option>3 to 6 Months</option>
            <option>Exploratory / Research</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-gray-300 mb-2">Primary Safety Requirement</label>
          <select
            value={inputs.primaryConcern}
            onChange={(e) => setInputs({ ...inputs, primaryConcern: e.target.value })}
            className="w-full px-4 py-2.5 rounded bg-brand-dark border border-brand-borderDark text-white focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm"
          >
            <option>Women&apos;s Safety &amp; Perimeter Vigilance</option>
            <option>Zero-Cloud Video Privacy Compliance</option>
            <option>Low-Connectivity / Off-Grid Resilience</option>
            <option>Multimodal Siren & GSM Emergency Dispatch</option>
            <option>False Alarm Suppression</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase text-gray-300 mb-2">Additional Environment Details (Optional)</label>
        <textarea
          rows={3}
          value={inputs.additionalNotes}
          onChange={(e) => setInputs({ ...inputs, additionalNotes: e.target.value })}
          placeholder="Number of perimeter zones, existing CCTV setup, power availability..."
          className="w-full px-4 py-2.5 rounded bg-brand-dark border border-brand-borderDark text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Processing Demo Request...' : 'Schedule SafeEdge™ Technical Demo'} <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
};
