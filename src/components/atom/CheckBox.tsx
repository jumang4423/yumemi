import HText from './HText';
import './checkBox.css';

interface CheckboxProps {
  title: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckboxProps> = ({ title, checked, onChange }) => {
  return (
    <div className="checkbox flex_row">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      <span className="checkbox__title">
        <HText tagNumber={4}> {title} </HText>
      </span>
    </div>
  );
};

export default CheckBox;
