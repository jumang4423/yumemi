import axios from 'axios';
import { Prefecture } from '../types/graph';
import { GetRESASAPIKey } from '../tools/getAPIKey';

export const GetPrefectures = async (): Promise<Array<Prefecture>> => {
  const RESASAPIKey = GetRESASAPIKey().unwrap();
  const res = await axios.get(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      headers: {
        'X-API-KEY': RESASAPIKey,
      },
    }
  );
  return res.data.result;
};
