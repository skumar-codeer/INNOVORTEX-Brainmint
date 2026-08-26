import { NextRequest } from 'next/server';
import { DemoRequestFormInputs } from '@/types';
import { ok, serverError, validationError } from '@/lib/api';
import { validateDemoRequestForm } from '@/lib/validation';
import { appendRecord } from '@/server/json-store';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.json();
    const body = (typeof rawBody === 'object' && rawBody !== null ? rawBody : {}) as DemoRequestFormInputs;
    const validation = validateDemoRequestForm(body);

    if (!validation.isValid) {
      return validationError(validation.errors as Record<string, string>);
    }

    const record = await appendRecord('demo-requests.json', 'demo', {
      fullName: body.fullName.trim(),
      workEmail: body.workEmail.trim().toLowerCase(),
      organizationName: body.organizationName.trim(),
      organizationType: body.organizationType,
      deploymentTimeline: body.deploymentTimeline,
      primaryConcern: body.primaryConcern,
      additionalNotes: body.additionalNotes?.trim() ?? '',
    });

    return ok(record, 'Demo request submitted successfully');
  } catch {
    return serverError();
  }
}
