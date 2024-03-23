import { InvestmentResearch, Dataset } from '@/app/_utils/types/datasetEDF';
import { mockInvestmentResearchData } from '@/app/_utils/mocks/investmentResearchData';

export const getInvestmentResearch = async (): Promise<InvestmentResearch> => {
  const response = await fetch(
    `https://opendata.edf.fr/api/explore/v2.1/catalog/datasets/${Dataset.INVESTMENT_RESEARCH}/records?select=annee%2C%20valeur&where=indicator%3D%22R%26D%20Investments%22%20and%20unite%3D%22M%24%22&order_by=annee&limit=30`,
  );

  // I won't have the time to authenticate the request on this test.
  // But we can discuss it in the intreview.
  if (response.status === 429) {
    return mockInvestmentResearchData;
  }

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data;
};
