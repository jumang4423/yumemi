import { Ok, Err, Result } from 'ts-results';

// RESASのAPIキーを取得する
export const GetRESASAPIKey = (): Result<string, Error> => {
  const RESAS_API_KEY = import.meta.env.VITE_RESAS_API_KEY;
  if (RESAS_API_KEY === undefined) {
    return new Err(new Error('VITE_RESAS_API_KEY is not defined'));
  }
  return new Ok(RESAS_API_KEY);
};
