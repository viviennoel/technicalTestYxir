import { Dataset, ProductionSource } from '@/app/_utils/types/datasetEDF';
import { mockProductionSourceData } from '@/app/_utils/mocks/productionSourceData';

export const getProductionSource = async (year: number): Promise<ProductionSource> => {
  const response = await fetch(
    `https://opendata.edf.fr/api/explore/v2.1/catalog/datasets/${Dataset.PRODUCTION_SOURCE}/records?select=sub_category%2Cvaleur&limit=20&refine=annee%3A${year}&refine=unite%3A%25`,
  );

  // I won't have the time to authenticate the request on this test.
  // But we can discuss it in the intreview.
  if (response.status === 429) {
    console.log('loggin to be implemented - Too many requests');
    return mockProductionSourceData();
  }

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data;
};
