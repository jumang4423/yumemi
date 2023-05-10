import { useState, useEffect } from 'react';
import { GetPrefectures } from '../apis/prefectures';
import { Prefecture } from '../types/graph';

const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Array<Prefecture>>([]);

  useEffect(() => {
    GetPrefectures().then(res => {
      setPrefectures(res);
    });
  }, []);

  return prefectures;
};

export default usePrefectures;
