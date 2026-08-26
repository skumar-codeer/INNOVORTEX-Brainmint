'use client';

import React, { useState } from 'react';
import { ContactFormInputs } from '@/types';
import { validateContactForm } from '@/lib/validation';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [inputs, setInputs] = useState<ContactFormInputs>({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
    agreeToPrivacy: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInputs, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(inputs);
    setErrors(result.errors);

    if (result.isValid) {
      setIsSubmitting(true);
      // Simulate API submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1000);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-xl bg-brand-cardDark border border-brand-cyan/40 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-brand-accent mx-auto" />
        <h3 className="text-2xl font-bold font-heading text-white">Inquiry Received</h3>
        <p className="text-sm text-brand-mutedDark max-w-md mx-auto">
          Thank you for contacting INNOVORTEX. An engineering representative will review your message and get back to you within 24 business hours.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
          Send Another Message
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
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            placeholder="Dr. Alex Vance"
            className="w-full px-4 py-2.5 rounded bg-brand-dark border border-brand-borderDark text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm"
          />
          {errors.name && <p className="text-xs text-brand-danger mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
            Work Email <span className="text-brand-alert">*</span>
          </label>
          <input
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            placeholder="alex.vance@institution.edu"
            className="w-full px-4 py-2.5 rounded bg-brand-dark border border-brand-borderDark text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm"
          />
          {errors.email && <p className="text-xs text-brand-danger mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
            Organization / Campus <span className="text-brand-alert">*</span>
          </label>
          <input
            type="text"
            value={inputs.organization}
            onChange={(e) => setInputs({ ...inputs, organization: e.target.value })}
            placeholder="Apex Educational Trust"
            className="w-full px-4 py-2.5 rounded bg-brand-dark border border-brand-borderDark text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm"
          />
          {errors.organization && <p className="text-xs text-brand-danger mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.organization}</p>}
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-gray-300 mb-2">Role / Title</label>
          <input
            type="text"
            value={inputs.role}
            onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
            placeholder="Head of Security Infrastructure"
            className="w-full px-4 py-2.5 rounded bg-brand-dark border border-brand-borderDark text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
          Message Details <span className="text-brand-alert">*</span>
        </label>
        <textarea
          rows={4}
          value={inputs.message}
          onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
          placeholder="Please describe your facility environment, perimeter size, or specific technical inquiry..."
          className="w-full px-4 py-2.5 rounded bg-brand-dark border border-brand-borderDark text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-sm"
        />
        {errors.message && <p className="text-xs text-brand-danger mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.message}</p>}
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="agreePrivacy"
          checked={inputs.agreeToPrivacy}
          onChange={(e) => setInputs({ ...inputs, agreeToPrivacy: e.target.checked })}
          className="mt-1 rounded bg-brand-dark border-brand-borderDark text-brand-cyan focus:ring-brand-cyan"
        />
        <label htmlFor="agreePrivacy" className="text-xs text-gray-300">
          I consent to INNOVORTEX processing my information in accordance with the Privacy Policy for the purpose of addressing this inquiry.
        </label>
      </div>
      {errors.agreeToPrivacy && <p className="text-xs text-brand-danger mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.agreeToPrivacy}</p>}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Transmitting Message...' : 'Send Message'} <Send className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
};
