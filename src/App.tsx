import { useState } from 'react';
import TitleBar from './components/TitleBar';
import PrefectureSelect from './components/PrefectureSelect';
import { Prefecture } from './types/graph';

function App() {
  const [selectedPrefectures, setSelectedPrefectures] = useState<
    Array<Prefecture>
  >([]);
  return (
    <div>
      <TitleBar />
      <PrefectureSelect
        selectedPrefectures={selectedPrefectures}
        setSelectedPrefectures={setSelectedPrefectures}
      />
    </div>
  );
}

export default App;
