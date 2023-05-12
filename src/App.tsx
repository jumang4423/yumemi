import { useState } from 'react';
import TitleBar from './components/TitleBar';
import PrefectureSelect from './components/PrefectureSelect';
import Spacer from './components/atom/Spacer';
import CategorySelect from './components/CategorySelect';
import {
  Prefecture,
  PopulationCategory,
  PopulationCategoryObj,
} from './types/graph';
import './app.css';

function App() {
  const [selectedPrefectures, setSelectedPrefectures] = useState<
    Array<Prefecture>
  >([]);
  const [selectedCategory, setSelectedCategory] = useState<PopulationCategory>(
    PopulationCategoryObj.total
  );
  return (
    <div>
      <TitleBar />
      <Spacer size={'medium'} />
      <PrefectureSelect
        selectedPrefectures={selectedPrefectures}
        setSelectedPrefectures={setSelectedPrefectures}
      />
      <Spacer size={'medium'} />
      <CategorySelect
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}

export default App;
