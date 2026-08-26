import { ContactFormInputs, DemoRequestFormInputs } from '@/types';

export interface ValidationResult<T> {
  isValid: boolean;
  errors: Partial<Record<keyof T, string>>;
}

export function validateContactForm(inputs: ContactFormInputs): ValidationResult<ContactFormInputs> {
  const errors: Partial<Record<keyof ContactFormInputs, string>> = {};

  if (!inputs.name.trim()) {
    errors.name = 'Full name is required';
  }

  if (!inputs.email.trim()) {
    errors.email = 'Work email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!inputs.organization.trim()) {
    errors.organization = 'Organization name is required';
  }

  if (!inputs.message.trim()) {
    errors.message = 'Please provide details about your inquiry';
  } else if (inputs.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  if (!inputs.agreeToPrivacy) {
    errors.agreeToPrivacy = 'You must accept the privacy policy to proceed';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateDemoRequestForm(inputs: DemoRequestFormInputs): ValidationResult<DemoRequestFormInputs> {
  const errors: Partial<Record<keyof DemoRequestFormInputs, string>> = {};

  if (!inputs.fullName.trim()) {
    errors.fullName = 'Full name is required';
  }

  if (!inputs.workEmail.trim()) {
    errors.workEmail = 'Work email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.workEmail)) {
    errors.workEmail = 'Please enter a valid work email address';
  }

  if (!inputs.organizationName.trim()) {
    errors.organizationName = 'Organization name is required';
  }

  if (!inputs.organizationType) {
    errors.organizationType = 'Please select your organization type';
  }

  if (!inputs.deploymentTimeline) {
    errors.deploymentTimeline = 'Please select a deployment timeline';
  }

  if (!inputs.primaryConcern) {
    errors.primaryConcern = 'Please select your primary security requirement';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
