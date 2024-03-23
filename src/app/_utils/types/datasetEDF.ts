export enum Dataset {
  PRODUCTION_SOURCE = 'origine-de-lelectricite-fournie-par-edf-sa',
  RENEWABLE_PRODUCTION = 'capacites-solaires-installees-edf-renouvelables',
  INVESTMENT_RESEARCH = 'investissements-recherche-et-developpement-edf',
}

// This is the type for the data we expect to receive from the backend
export type ProductionSource = {
  results: { sub_category: string; valeur: number }[];
};
export type RenewableProduction = {
  results: { code3: string; z: number }[];
};
export type InvestmentResearch = {
  results: { annee: string; valeur: number }[];
};
