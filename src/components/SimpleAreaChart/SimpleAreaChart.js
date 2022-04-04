import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import useChartData from '../CustomHooks/useChartData/useChartData';

const SimpleAreaChart = () => {
  const [chartData] = useChartData();
  // useEffect(() => {
  //   fetch('data.json')
  //     .then((res) => res.json())
  //     .then((chart) => setChartData(chart))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div>
      <AreaChart
        width={500}
        height={400}
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
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  );
};

export default SimpleAreaChart;
