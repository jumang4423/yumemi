import { Ok } from 'ts-results';
import { Prefecture } from '../types/prefecture';
import { GetPrefectures } from './prefectures';
import { describe, test, expect, it } from 'vitest';

const PREFECTURES_NUMBER_JAPAN = 47;
const FIRST_5_PREFECTURES = [
  { prefCode: 1, prefName: '北海道' },
  { prefCode: 2, prefName: '青森県' },
  { prefCode: 3, prefName: '岩手県' },
  { prefCode: 4, prefName: '宮城県' },
  { prefCode: 5, prefName: '秋田県' },
];

describe('GetPrefectures', () => {
  it('should return prefectures array', async () => {
    const result = await GetPrefectures();
    test('result is Ok', () => expect(result).toBeInstanceOf(Ok));
    const OkValue = result.val as Array<Prefecture>;
    test('result value has proper length', () =>
      expect(OkValue.length).toBe(PREFECTURES_NUMBER_JAPAN));
    test('result value has proper first 5 prefectures', () =>
      expect(OkValue.slice(0, 5)).toEqual(FIRST_5_PREFECTURES));
  });
});
