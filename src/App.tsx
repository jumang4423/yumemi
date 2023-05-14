import { useState } from 'react';
import TitleBar from './components/TitleBar';
import PrefectureSelect from './components/PrefectureSelect';
import Spacer from './components/atom/Spacer';
import CategorySelect from './components/CategorySelect';
import PopulationChart from './components/Chart/PopulationChart';
import { Category, CategoryObj } from './types/category';
import { Prefecture } from './types/prefecture';
import './app.css';

function App() {
  const [selectedPrefectures, setSelectedPrefectures] = useState<
    Array<Prefecture>
  >([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    CategoryObj.total
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
      <Spacer size={'medium'} />
      <PopulationChart
        selectedPrefectures={selectedPrefectures}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
