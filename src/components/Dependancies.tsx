import { RecoilRoot } from 'recoil';

interface DependanciesProps {
  children: React.ReactNode;
}

const Dependancies: React.FC<DependanciesProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Dependancies;
