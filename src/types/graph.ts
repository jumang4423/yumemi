// prefecture
export interface Prefecture {
  prefCode: number;
  prefName: string;
}

// category
export const PopulationCategoryObj = {
  total: 'total',
  young: 'young',
  workingAge: 'workingAge',
  elderly: 'elderly',
} as const;
export type PopulationCategory =
  (typeof PopulationCategoryObj)[keyof typeof PopulationCategoryObj];
export const CategoryLabels: { [key in PopulationCategory]: string } = {
  total: '総人口',
  young: '年少人口',
  workingAge: '生産年齢人口',
  elderly: '老年人口',
};

// population
export interface Population {
  year: number;
  value: number;
}

export interface PrefecturePopulation {
  prefCode: number;
  population: Array<Population>;
}
