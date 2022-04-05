import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import useChartData from '../CustomHooks/useChartData/useChartData';

const SimpleAreaChart = () => {
  const [chartData] = useChartData();

  return (
    <div>
      <h3 className="text-indigo-700 text-3xl ml-20 my-4">
        Investment vs Revenue
      </h3>
      <AreaChart width={300} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="investment"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
    </div>
  );
};

export default SimpleAreaChart;
