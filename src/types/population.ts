export interface Population {
  year: number;
  value: number;
}

export interface PrefecturePopulation {
  prefCode: number;
  total: Array<Population>;
  young: Array<Population>;
  workingAge: Array<Population>;
  elderly: Array<Population>;
}
