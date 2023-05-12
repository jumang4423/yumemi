import './spacer.css';

interface SpacerProps {
  size: 'small' | 'medium' | 'large';
}

const Spacer: React.FC<SpacerProps> = ({ size }) => {
  return <div className={`spacer__${size}`} />;
};

export default Spacer;
