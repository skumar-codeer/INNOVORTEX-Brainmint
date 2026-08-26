import { NextResponse } from 'next/server';

export function validationError(errors: Record<string, string>) {
  return NextResponse.json(
    {
      success: false,
      message: 'Validation failed',
      errors,
    },
    { status: 400 },
  );
}

export function ok<T>(data: T, message = 'Request completed successfully') {
  return NextResponse.json({
    success: true,
    message,
    data,
  });
}

export function serverError() {
  return NextResponse.json(
    {
      success: false,
      message: 'Unexpected server error',
    },
    { status: 500 },
  );
}
