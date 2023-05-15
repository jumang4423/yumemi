import { useState, useEffect } from 'react';
import { GetPrefectures } from '../apis/prefectures';
import { Prefecture } from '../types/prefecture';
import { useSetRecoilState } from 'recoil';
import { IsLoadingAtom } from '../recoil/isLoading';

interface usePrefecturesReturn {
  prefectures: Array<Prefecture>;
}

const usePrefectures = (): usePrefecturesReturn => {
  const [prefectures, setPrefectures] = useState<Array<Prefecture>>([]);
  const setIsLoading = useSetRecoilState(IsLoadingAtom);

  useEffect(() => {
    const fetchPrefectures = async () => {
      setIsLoading(true);
      const res = await GetPrefectures();
      setPrefectures(res.unwrap());
      setIsLoading(false);
    };

    fetchPrefectures();
  }, []);

  return { prefectures };
};

export default usePrefectures;
