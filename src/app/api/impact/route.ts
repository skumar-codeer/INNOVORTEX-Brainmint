import { IMPACT_SCENARIOS, METRIC_CARDS_DATA } from '@/data/impact';
import { ok } from '@/lib/api';

export async function GET() {
  return ok({
    metrics: METRIC_CARDS_DATA,
    scenarios: IMPACT_SCENARIOS,
  });
}
