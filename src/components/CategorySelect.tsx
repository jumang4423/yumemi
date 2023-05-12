import React from 'react';
import { PopulationCategory, CategoryLabels } from '../types/graph';
import HText from './atom/HText';
import './categorySelect.css';

interface CategorySelectProps {
  selectedCategory: PopulationCategory;
  setSelectedCategory: (category: PopulationCategory) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <>
      <div className="category_select_title">
        <HText tagNumber={3}> 人口カテゴリ選択</HText>
      </div>
      <div className="category_select_container">
        <select
          value={selectedCategory}
          onChange={e =>
            setSelectedCategory(e.target.value as PopulationCategory)
          }
        >
          {Object.entries(CategoryLabels).map(([key, label]) => (
            <option key={key} value={key}>
              <HText tagNumber={4}>{label}</HText>
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CategorySelect;
