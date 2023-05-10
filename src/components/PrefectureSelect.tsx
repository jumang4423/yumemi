import React from 'react';
import usePrefectures from '../hooks/usePrefectures';
import { Prefecture } from '../types/graph';
import CheckBox from './atom/CheckBox';
import './prefectureSelect.css';

interface PrefectureSelect {
  selectedPrefectures: Array<Prefecture>;
  setSelectedPrefectures: (selectedPrefectures: Array<Prefecture>) => void;
}

const PrefectureSelect: React.FC<PrefectureSelect> = ({
  selectedPrefectures,
  setSelectedPrefectures,
}) => {
  const prefectures: Array<Prefecture> = usePrefectures();
  const handleCheck = (prefecture: Prefecture) => {
    if (selectedPrefectures.some(p => p.prefCode === prefecture.prefCode)) {
      setSelectedPrefectures(
        selectedPrefectures.filter(p => p.prefCode !== prefecture.prefCode)
      );
    } else {
      setSelectedPrefectures([...selectedPrefectures, prefecture]);
    }
  };

  return (
    <div className="prefecture_select_container">
      {prefectures.map(prefecture => {
        const checked = selectedPrefectures.some(
          selectedPrefecture =>
            selectedPrefecture.prefCode === prefecture.prefCode
        );
        return (
          <div key={prefecture.prefCode}>
            <CheckBox
              title={prefecture.prefName}
              checked={checked}
              onChange={() => {
                handleCheck(prefecture);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PrefectureSelect;
