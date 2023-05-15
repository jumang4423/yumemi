import Loader from './atom/Loader';
import { useRecoilState } from 'recoil';
import { IsLoadingAtom } from '../recoil/isLoading';
import './loadingScreen.css';

const LoadingScreen = () => {
  const [isLoading] = useRecoilState(IsLoadingAtom);

  if (!isLoading) return null;
  return (
    <div className="loading_screen">
      <Loader />
    </div>
  );
};

export default LoadingScreen;
