import { atom } from 'recoil';

export const IsLoadingAtom = atom<boolean>({
  key: 'IsLoading',
  default: false,
});
