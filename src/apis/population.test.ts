import { Ok } from 'ts-results';
import { PrefecturePopulation } from '../types/population';
import { Prefecture } from '../types/prefecture';
import { GetPopulation } from './population';
import { describe, test, expect, it } from 'vitest';

const Hokkaido: Prefecture = { prefCode: 1, prefName: '北海道' };
describe('GetPopulation', () => {
  it('should return hokkaido population data', async () => {
    const result = await GetPopulation(Hokkaido);
    test('result is ok', () => expect(result).toBeInstanceOf(Ok));
    const OkValue = result.val as PrefecturePopulation;
    test('prefecture code is 1', () => expect(OkValue.prefCode).toBe(1));
    test('prefecture has population data', () => {
      expect(OkValue.total.length).toBeGreaterThan(0);
      expect(OkValue.elderly.length).toBeGreaterThan(0);
      expect(OkValue.workingAge.length).toBeGreaterThan(0);
      expect(OkValue.young.length).toBeGreaterThan(0);
    });
  });
});
