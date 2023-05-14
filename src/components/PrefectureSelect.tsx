import React from 'react';
import usePrefectures from '../hooks/usePrefectures';
import { Prefecture } from '../types/prefecture';
import CheckBox from './atom/CheckBox';
import HText from './atom/HText';
import './prefectureSelect.css';

interface PrefectureSelect {
  selectedPrefectures: Array<Prefecture>;
  setSelectedPrefectures: (selectedPrefectures: Array<Prefecture>) => void;
}

const PrefectureSelect: React.FC<PrefectureSelect> = ({
  selectedPrefectures,
  setSelectedPrefectures,
}) => {
  const { prefectures, isLoading } = usePrefectures();
  const handleCheck = (prefecture: Prefecture) => {
    if (selectedPrefectures.some(p => p.prefCode === prefecture.prefCode)) {
      setSelectedPrefectures(
        selectedPrefectures.filter(p => p.prefCode !== prefecture.prefCode)
      );
    } else {
      setSelectedPrefectures([...selectedPrefectures, prefecture]);
    }
  };
  const prefectureCheckBoxes = () =>
    prefectures.map(prefecture => {
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
    });

  return (
    <>
      <div className="prefecture_select_title">
        <HText tagNumber={3}>{isLoading ? '読み込み中...' : '都道府県'}</HText>
      </div>
      <div className="prefecture_select_container">
        {prefectureCheckBoxes()}
      </div>
    </>
  );
};

export default PrefectureSelect;
