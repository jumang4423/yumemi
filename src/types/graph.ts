// prefecture
export interface Prefecture {
  prefCode: number;
  prefName: string;
}

// population
export interface Population {
  year: number;
  value: number;
}

export interface PrefecturePopulation {
  prefCode: number;
  population: Array<Population>;
}
