import { atom } from 'recoil';
import { Category, CategoryObj } from '../types/category';

export const SelectedCategoryAtom = atom<Category>({
  key: 'SelectedCategory',
  default: CategoryObj.total,
});
