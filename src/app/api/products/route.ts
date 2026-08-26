import { ok } from '@/lib/api';
import { HOW_IT_WORKS_PIPELINE, SAFEEDGE_PRODUCT_DATA } from '@/data/products';

export async function GET() {
  return ok({
    products: [SAFEEDGE_PRODUCT_DATA],
    pipeline: HOW_IT_WORKS_PIPELINE,
  });
}
