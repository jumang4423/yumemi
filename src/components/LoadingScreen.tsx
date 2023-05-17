import Loader from './atom/Loader';
import { useRecoilState } from 'recoil';
import { IsLoadingAtom } from '../recoil/isLoading';
import './loadingScreen.css';

const LoadingScreen = () => {
  const [isLoading] = useRecoilState(IsLoadingAtom);

  return (
    <div className={`loading_screen ${!isLoading && 'loading_screen--hidden'}`}>
      <Loader />
    </div>
  );
};

export default LoadingScreen;
