import HText from '../atom/HText';
import {
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useRecoilState } from 'recoil';
import usePopulation from '../../hooks/usePopulation';
import { ToChartData } from './populationChartHelpers';
import './populationChart.css';
import { SelectedPrefecturesAtom } from '../../recoil/selectedPrefectures';
import { SelectedCategoryAtom } from '../../recoil/selectedCategory';

const PopulationChart = () => {
  const [selectedPrefectures] = useRecoilState(SelectedPrefecturesAtom);
  const [selectedCategory] = useRecoilState(SelectedCategoryAtom);
  const { populations } = usePopulation(selectedPrefectures);

  const getLineColor = (prefCode: number) => {
    const hue = prefCode * 28;
    const saturation = 50;
    const lightness = (prefCode / 10) * 10 + 40;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  // define chart component
  const chart = (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={ToChartData(populations, selectedCategory, selectedPrefectures)}
        width={600}
        height={300}
        margin={{ top: 10, right: 20, bottom: 20, left: 10 }}
      >
        {selectedPrefectures.map(prefecture => (
          <Line
            key={prefecture.prefCode}
            type="monotone"
            dataKey={prefecture.prefName}
            strokeWidth={2}
            stroke={getLineColor(prefecture.prefCode)}
          />
        ))}

        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="year" fontSize={10} />
        <YAxis fontSize={10} />
        <Tooltip />
        <Legend fontSize={12} />
      </LineChart>
    </ResponsiveContainer>
  );

  const noData = (
    <div>
      <HText tagNumber={4}>データがありません</HText>
    </div>
  );

  return (
    <>
      <div className="population_chart_title">
        <HText tagNumber={3}>プレビュー</HText>
      </div>
      {selectedPrefectures.length > 0 ? chart : noData}
    </>
  );
};

export default PopulationChart;
