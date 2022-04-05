import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../CustomHooks/useChartData/useChartData';

const SimpleBarChart = () => {
  const [chartData] = useChartData();
  // useEffect(() => {
  //   fetch('data.json')
  //     .then((res) => res.json())
  //     .then((chart) => setChartData(chart))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div>
      <h3>Investment vs Revenue</h3>
      <BarChart
        width={830}
        height={250}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default SimpleBarChart;
