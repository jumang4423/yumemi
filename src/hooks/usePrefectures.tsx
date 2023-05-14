import { useState, useEffect } from 'react';
import { GetPrefectures } from '../apis/prefectures';
import { Prefecture } from '../types/prefecture';

interface usePrefecturesReturn {
  prefectures: Array<Prefecture>;
  isLoading: boolean;
}

const usePrefectures = (): usePrefecturesReturn => {
  const [prefectures, setPrefectures] = useState<Array<Prefecture>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPrefectures = async () => {
    setIsLoading(true);
    const res = await GetPrefectures();
    setPrefectures(res.unwrap());
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPrefectures();
  }, []);

  return { prefectures, isLoading };
};

export default usePrefectures;
