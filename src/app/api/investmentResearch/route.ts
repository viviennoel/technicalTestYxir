// This is just an example of a route we would call to interact with the data.
// There would need to be a route.
//       -> to update the user's preferences.
//       -> to get the new data from the clients components when the user modifies his preferences.
//       -> We need as well to create a middleware of authentification with nextAuth.

import { mockInvestmentResearchData } from '@/app/_utils/mocks/investmentResearchData';
import { Dataset, InvestmentResearch } from '@/app/_utils/types/datasetEDF';
import { NextResponse } from 'next/server';

export async function POST(): Promise<NextResponse<InvestmentResearch>> {
  const response = await fetch(
    `https://opendata.edf.fr/api/explore/v2.1/catalog/datasets/${Dataset.INVESTMENT_RESEARCH}/records?select=annee%2C%20valeur&where=indicator%3D%22R%26D%20Investments%22%20and%20unite%3D%22M%24%22&order_by=annee&limit=30`,
  );

  // I won't have the time to authenticate the request on this test.
  // But we can discuss it in the intreview.
  if (response.status === 429) {
    console.log('loggin to be implemented - Too many requests');
    return NextResponse.json(mockInvestmentResearchData);
  }

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return NextResponse.json((data))
}
