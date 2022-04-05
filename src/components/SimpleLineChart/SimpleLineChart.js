import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import useChartData from '../CustomHooks/useChartData/useChartData';

const SimpleLineChart = () => {
  const [chartData] = useChartData();

  return (
    <div>
      <h3 className="text-indigo-700 text-3xl ml-20 my-4">Month wise sell</h3>
      <LineChart width={300} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sell"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default SimpleLineChart;
