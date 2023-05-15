import { atom } from 'recoil';
import { Prefecture } from '../types/prefecture';

export const SelectedPrefecturesAtom = atom<Array<Prefecture>>({
  key: 'SelectedPrefectures',
  default: [],
});
