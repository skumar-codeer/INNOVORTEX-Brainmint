import { ROADMAP_DATA } from '@/data/roadmap';
import { ok } from '@/lib/api';

export async function GET() {
  return ok({
    roadmap: ROADMAP_DATA,
  });
}
