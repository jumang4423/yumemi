import { useEffect, useState } from 'react';
import { Prefecture } from '../types/prefecture';
import { GetPopulation } from '../apis/population';
import { PrefecturePopulation } from '../types/population';
import { useRecoilState } from 'recoil';
import { IsLoadingAtom } from '../recoil/isLoading';

interface usePopulationReturn {
  populations: Array<PrefecturePopulation>;
}

const usePopulation = (
  prefectureList: Array<Prefecture>
): usePopulationReturn => {
  const [isLoading, setIsLoading] = useRecoilState(IsLoadingAtom);
  const [populations, setPopulations] = useState<Array<PrefecturePopulation>>(
    []
  );

  const getPrefecturesToFetch = (
    prefectureList: Array<Prefecture>,
    populations: Array<PrefecturePopulation>
  ): Array<Prefecture> => {
    return prefectureList.filter(
      prefecture => !populations.find(p => p.prefCode === prefecture.prefCode)
    );
  };

  const fetchPopulations = async (
    prefecturesToFetch: Array<Prefecture>,
    populations: Array<PrefecturePopulation>
  ) => {
    setIsLoading(true);
    const newPopulations = await Promise.all(
      prefecturesToFetch.map(async prefecture => {
        const population = await GetPopulation(prefecture);
        return population.unwrap();
      })
    );

    setPopulations([...populations, ...newPopulations]);
    setIsLoading(false);
  };

  useEffect(() => {
    const prefecturesToFetch = getPrefecturesToFetch(
      prefectureList,
      populations
    );

    if (prefecturesToFetch.length && !isLoading) {
      fetchPopulations(prefecturesToFetch, populations);
    }
  }, [prefectureList]);

  return { populations };
};

export default usePopulation;
