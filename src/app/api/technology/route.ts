import { TECHNOLOGY_STACK_DATA } from '@/data/technology';
import { ok } from '@/lib/api';

export async function GET() {
  return ok({
    technologies: TECHNOLOGY_STACK_DATA,
  });
}
