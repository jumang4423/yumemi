import { useCallback } from 'react';
import usePrefectures from '../hooks/usePrefectures';
import { Prefecture } from '../types/prefecture';
import CheckBox from './atom/CheckBox';
import HText from './atom/HText';
import { useRecoilState } from 'recoil';
import './prefectureSelect.css';
import { SelectedPrefecturesAtom } from '../recoil/selectedPrefectures';

const PrefectureSelect = () => {
  const [selectedPrefectures, setSelectedPrefectures] = useRecoilState(
    SelectedPrefecturesAtom
  );
  const { prefectures } = usePrefectures();
  const handleCheck = useCallback(
    (prefecture: Prefecture) => {
      const newSelectedPrefectures = selectedPrefectures.includes(prefecture)
        ? selectedPrefectures.filter(p => p !== prefecture)
        : [...selectedPrefectures, prefecture];
      setSelectedPrefectures(newSelectedPrefectures);
    },
    [selectedPrefectures]
  );
  const prefectureCheckBoxes = (prefectures: Array<Prefecture>) =>
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
        <HText tagNumber={3}>都道府県</HText>
      </div>
      <div className="prefecture_select_container">
        {prefectureCheckBoxes(prefectures)}
      </div>
    </>
  );
};

export default PrefectureSelect;
