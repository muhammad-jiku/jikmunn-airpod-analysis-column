import React from 'react';
import { Pie, PieChart } from 'recharts';
// custom hook imported
import useChartData from '../CustomHooks/useChartData/useChartData';

const SimplePieChart = () => {
  const [chartData] = useChartData();

  return (
    <div>
      <PieChart width={300} height={400}>
        <Pie
          data={chartData}
          dataKey="investment"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={chartData}
          dataKey="revenue"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default SimplePieChart;
