import TitleBar from './components/TitleBar';
import PrefectureSelect from './components/PrefectureSelect';
import Spacer from './components/atom/Spacer';
import CategorySelect from './components/CategorySelect';
import PopulationChart from './components/Chart/PopulationChart';
import LoadingScreen from './components/LoadingScreen';
import './app.css';

function App() {
  return (
    <div>
      <LoadingScreen />
      <TitleBar />
      <Spacer size={'medium'} />
      <PrefectureSelect />
      <Spacer size={'medium'} />
      <CategorySelect />
      <Spacer size={'medium'} />
      <PopulationChart />
    </div>
  );
}

export default App;
