import { Prefecture } from '../../types/prefecture';
import { PrefecturePopulation } from '../../types/population';
import { Category } from '../../types/category';

const START_YEAR = 1980;
const END_YEAR = 2045;
const YEAR_INTERVAL = 5;

export const ToChartData = (
  populations: Array<PrefecturePopulation>,
  selectedCategory: Category,
  selectedPrefectures: Array<Prefecture>
): Array<PrefecturePopulation> => {
  if (populations.length === 0) return [];

  const filteredPopulations = filterPopulations(
    populations,
    selectedPrefectures
  );
  const chart = [];

  for (let i = START_YEAR; i <= END_YEAR; i += YEAR_INTERVAL) {
    const yearData = createYearData(
      i,
      filteredPopulations,
      selectedCategory,
      selectedPrefectures
    );
    chart.push(Object.fromEntries(yearData));
  }

  return chart;
};

export const createYearData = (
  year: number,
  populations: Array<PrefecturePopulation>,
  selectedCategory: Category,
  selectedPrefectures: Array<Prefecture>
) => {
  const yearData = new Map();
  yearData.set('year', year);

  for (const population of populations) {
    const prefectureName = selectedPrefectures.find(
      prefecture => prefecture.prefCode === population.prefCode
    )?.prefName;
    yearData.set(
      prefectureName,
      population[selectedCategory][(year - START_YEAR) / YEAR_INTERVAL].value
    );
  }

  return yearData;
};

export const filterPopulations = (
  populations: Array<PrefecturePopulation>,
  selectedPrefectures: Array<Prefecture>
): Array<PrefecturePopulation> => {
  return populations.filter(population =>
    selectedPrefectures.some(p => p.prefCode === population.prefCode)
  );
};

export const GetLineColor = (prefCode: number): string => {
  const hue = prefCode * 28;
  const saturation = 50;
  const lightness = (prefCode / 10) * 10 + 40;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
