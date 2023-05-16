import { Ok, Err } from 'ts-results';
import { GetRESASAPIKey } from './getAPIKey';
import { describe, expect, beforeEach, afterEach, it } from 'vitest';

const TEST_API_KEY = 'TEST_API_KEY';

describe('GetRESASAPIKey', () => {
  beforeEach(() => {
    process.env.VITE_RESAS_API_KEY = TEST_API_KEY;
  });

  afterEach(() => {
    delete process.env.VITE_RESAS_API_KEY;
  });

  it('should return an Ok with the API key', () => {
    const result = GetRESASAPIKey();
    expect(result).toEqual(new Ok(TEST_API_KEY));
  });

  it('should return an Err if the API key is not defined', () => {
    delete process.env.VITE_RESAS_API_KEY;
    const result = GetRESASAPIKey();
    expect(result).toEqual(
      new Err(new Error('VITE_RESAS_API_KEY is not defined'))
    );
  });
});
