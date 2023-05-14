import axios from 'axios';
import { PrefecturePopulation } from '../types/population';
import { Prefecture } from '../types/prefecture';
import { GetRESASAPIKey } from '../tools/getAPIKey';
import { Ok, Err, Result } from 'ts-results';
import ENDPOINT from './endpoint';

export const GetPopulation = async (
  prefecture: Prefecture
): Promise<Result<PrefecturePopulation, Error>> => {
  const RESASAPIKey = GetRESASAPIKey();
  if (RESASAPIKey.err) {
    return Err(RESASAPIKey.val);
  }

  try {
    const res = await axios.get(
      `${ENDPOINT}/api/v1/population/composition/perYear`,
      {
        headers: {
          'X-API-KEY': RESASAPIKey.val,
        },
        params: {
          prefCode: prefecture.prefCode,
          cityCode: '-', // 全市町村
        },
      }
    );
    const total = res.data.result.data[0].data;
    const young = res.data.result.data[1].data;
    const workingAge = res.data.result.data[2].data;
    const elderly = res.data.result.data[3].data;

    return new Ok({
      prefCode: prefecture.prefCode,
      total,
      young,
      workingAge,
      elderly,
    } as PrefecturePopulation);
  } catch (e) {
    return new Err(e as Error);
  }
};
