import { useEffect, useState } from 'react';
import { Prefecture } from '../types/prefecture';
import { GetPopulation } from '../apis/population';
import { PrefecturePopulation } from '../types/population';
import { useSetRecoilState } from 'recoil';
import { IsLoadingAtom } from '../recoil/isLoading';

interface usePopulationReturn {
  populations: Array<PrefecturePopulation>;
}

const usePopulation = (
  prefectureList: Array<Prefecture>
): usePopulationReturn => {
  const setIsLoading = useSetRecoilState(IsLoadingAtom);
  const [populations, setPopulations] = useState<Array<PrefecturePopulation>>(
    []
  );

  useEffect(() => {
    const fetchPopulations = async () => {
      setIsLoading(true);
      const newPrefectures = structuredClone(populations);
      for (const prefecture of prefectureList) {
        const cachedPopulation = populations.find(
          p => p.prefCode === prefecture.prefCode
        );
        if (!cachedPopulation) {
          const population = await GetPopulation(prefecture);
          newPrefectures.push(population.unwrap());
        }
      }
      setPopulations(newPrefectures);
      setIsLoading(false);
    };

    fetchPopulations();
  }, [prefectureList, populations]);

  return { populations };
};

export default usePopulation;
