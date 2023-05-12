import { useState } from 'react';
import TitleBar from './components/TitleBar';
import PrefectureSelect from './components/PrefectureSelect';
import Spacer from './components/atom/Spacer';
import { Prefecture } from './types/graph';
import './app.css';

function App() {
  const [selectedPrefectures, setSelectedPrefectures] = useState<
    Array<Prefecture>
  >([]);
  return (
    <div>
      <TitleBar />
      <Spacer size={'medium'} />
      <PrefectureSelect
        selectedPrefectures={selectedPrefectures}
        setSelectedPrefectures={setSelectedPrefectures}
      />
    </div>
  );
}

export default App;
