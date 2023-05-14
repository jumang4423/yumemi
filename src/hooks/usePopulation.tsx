import { useState, useEffect, useRef } from 'react';
import { Prefecture } from '../types/prefecture';
import { GetPopulation } from '../apis/population';
import { PrefecturePopulation } from '../types/population';

interface usePopulationReturn {
  populations: Array<PrefecturePopulation>;
  isLoading: boolean;
}

const usePopulation = (
  prefectureList: Array<Prefecture>
): usePopulationReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const cachedPopulations = useRef<Array<PrefecturePopulation>>([]);

  useEffect(() => {
    const fetchPopulations = async () => {
      setIsLoading(true);
      const newPrefectures = structuredClone(cachedPopulations.current);
      for (const prefecture of prefectureList) {
        const cachedPopulation = cachedPopulations.current.find(
          p => p.prefCode === prefecture.prefCode
        );
        if (!cachedPopulation) {
          const population = await GetPopulation(prefecture);
          newPrefectures.push(population.unwrap());
        }
      }
      cachedPopulations.current = newPrefectures;
      setIsLoading(false);
    };

    fetchPopulations();
  }, [prefectureList]);

  return { populations: cachedPopulations.current, isLoading };
};

export default usePopulation;
