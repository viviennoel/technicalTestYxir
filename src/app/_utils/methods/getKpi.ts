import { KPIs } from '@/app/_utils/types/KPIs';

// This is a dummy function for the front. We need to pass the KPI folloed to the function
// kpi:KPIs for example. This information comes from the user profile.

export const getKpi = (year: string): number => {
  return mockAPICallKpi(year);
};

const mockAPICallKpi = (year: string): number => {
  switch (year) {
    case '2018':
      return 4;
    case '2019':
      return 4;
    case '2020':
      return 9;
    case '2021':
      return 7;
    case '2022':
      return 5;
    case '2023':
      return 1;
    default:
      console.log('loggin system not implemented - year not found');
      return 0;
  }
};
