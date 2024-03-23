import { RenewableProduction, Dataset } from '@/app/_utils/types/datasetEDF';
import { mockRenewableProductionData } from '@/app/_utils/mocks/renewableProductionData';

export const getRenewableProduction = async (year: number): Promise<RenewableProduction> => {
  // Haven't found an API corresponding to the interface we need.
  // The filtering need to be done backend, in order to optimize performances
  const response = mockRenewableProductionData;

  return response;
};
