import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
// custom hook imported
import useChartData from '../CustomHooks/useChartData/useChartData';

const SimpleBarChart = () => {
  const [chartData] = useChartData();

  return (
    <div>
      <h3 className="text-indigo-700 text-3xl ml-20 my-4">
        Investment vs Revenue
      </h3>
      <BarChart width={300} height={250} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default SimpleBarChart;
