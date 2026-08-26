import { NextRequest, NextResponse } from 'next/server';
import { requireRole } from '@/server/auth';
import { findEvents } from '@/server/safeedge-store';

export const runtime = 'nodejs';
export async function GET(request: NextRequest) {
  if (!requireRole(request, ['admin', 'operator', 'viewer'])) return NextResponse.json({ success: false, error: { code: 'UNAUTHORIZED', message: 'A valid access token is required' } }, { status: 401 });
  const limit = Math.min(Math.max(Number(request.nextUrl.searchParams.get('limit') ?? 10) || 10, 1), 100);
  const result = await findEvents({ limit, page: 1 });
  return NextResponse.json({ success: true, ...result });
}
