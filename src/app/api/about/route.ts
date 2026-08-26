import { ABOUT_DATA } from '@/data/about';
import { ok } from '@/lib/api';

export async function GET() {
  return ok({
    about: ABOUT_DATA,
  });
}
