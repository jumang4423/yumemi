import React from 'react';
import { Prefecture } from '../../types/prefecture';
import { Category } from '../../types/category';
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
import usePopulation from '../../hooks/usePopulation';
import { ToChartData } from './populationChartHelpers';
import './populationChart.css';

interface PopulationChartProps {
  selectedPrefectures: Array<Prefecture>;
  selectedCategory: Category;
}

const PopulationChart: React.FC<PopulationChartProps> = ({
  selectedPrefectures,
  selectedCategory,
}) => {
  const { populations, isLoading } = usePopulation(selectedPrefectures);

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
            stroke={`hsl(${prefecture.prefCode * 25},100%,35%)`}
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
        <HText tagNumber={3}>
          {isLoading ? '読み込み中...' : 'プレビュー'}
        </HText>
      </div>
      {selectedPrefectures.length > 0 ? chart : noData}
    </>
  );
};

export default PopulationChart;
