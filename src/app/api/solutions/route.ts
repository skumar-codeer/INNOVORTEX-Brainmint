import { SOLUTIONS_DATA } from '@/data/solutions';
import { ok } from '@/lib/api';

export async function GET() {
  return ok({
    solutions: SOLUTIONS_DATA,
  });
}
