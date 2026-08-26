import { NextRequest } from 'next/server';
import { ContactFormInputs } from '@/types';
import { ok, serverError, validationError } from '@/lib/api';
import { validateContactForm } from '@/lib/validation';
import { appendRecord } from '@/server/json-store';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.json();
    const body = (typeof rawBody === 'object' && rawBody !== null ? rawBody : {}) as ContactFormInputs;
    const validation = validateContactForm(body);

    if (!validation.isValid) {
      return validationError(validation.errors as Record<string, string>);
    }

    const record = await appendRecord('contact-submissions.json', 'contact', {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      organization: body.organization.trim(),
      role: body.role?.trim() ?? '',
      message: body.message.trim(),
    });

    return ok(record, 'Contact inquiry submitted successfully');
  } catch {
    return serverError();
  }
}
