import { Category, CategoryLabels } from '../types/category';
import HText from './atom/HText';
import { useRecoilState } from 'recoil';
import './categorySelect.css';
import { SelectedCategoryAtom } from '../recoil/selectedCategory';

const CategorySelect = () => {
  const [selectedCategory, setSelectedCategory] =
    useRecoilState(SelectedCategoryAtom);
  return (
    <>
      <div className="category_select_title">
        <HText tagNumber={3}> 人口カテゴリ選択</HText>
      </div>
      <div className="category_select_container">
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value as Category)}
        >
          {Object.entries(CategoryLabels).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CategorySelect;
