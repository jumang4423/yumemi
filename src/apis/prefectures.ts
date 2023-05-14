import axios from 'axios';
import { Prefecture } from '../types/prefecture';
import { GetRESASAPIKey } from '../tools/getAPIKey';
import { Ok, Err, Result } from 'ts-results';
import ENDPOINT from './endpoint';

export const GetPrefectures = async (): Promise<
  Result<Array<Prefecture>, Error>
> => {
  const RESASAPIKey = GetRESASAPIKey();
  if (RESASAPIKey.err) {
    return Err(RESASAPIKey.val);
  }

  try {
    const res = await axios.get(`${ENDPOINT}/api/v1/prefectures`, {
      headers: {
        'X-API-KEY': RESASAPIKey.val,
      },
    });
    return new Ok(res.data.result);
  } catch (e) {
    return new Err(e as Error);
  }
};
