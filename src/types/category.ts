export const CategoryObj = {
  total: 'total',
  young: 'young',
  workingAge: 'workingAge',
  elderly: 'elderly',
} as const;
export type Category = (typeof CategoryObj)[keyof typeof CategoryObj];
export const CategoryLabels: { [key in Category]: string } = {
  total: '総人口',
  young: '年少人口',
  workingAge: '生産年齢人口',
  elderly: '老年人口',
};
