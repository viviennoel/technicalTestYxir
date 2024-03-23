// This is just an example of a route we would call to interact with the data.
// There would need to be a route.
//       -> to update the user's preferences.
//       -> to get the new data from the clients components when the user modifies his preferences.
//       -> We need as well to create a middleware of authentification with nextAuth.

import { mockProductionSourceData } from '@/app/_utils/mocks/productionSourceData';
import { Dataset, ProductionSource } from '@/app/_utils/types/datasetEDF';
import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse<ProductionSource>> {
  const body = await req.json();
  const response = await fetch(
    `https://opendata.edf.fr/api/explore/v2.1/catalog/datasets/${Dataset.PRODUCTION_SOURCE}/records?select=sub_category%2Cvaleur&limit=20&refine=annee%3A${body.year}&refine=unite%3A%25`,
  );

  // I won't have the time to authenticate the request on this test.
  // But we can discuss it in the intreview.
  if (response.status === 429) {
    console.log('loggin to be implemented - Too many requests');
    return NextResponse.json(mockProductionSourceData());
  }

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return NextResponse.json(data);
}
