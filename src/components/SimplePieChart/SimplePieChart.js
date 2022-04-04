import React from 'react';
import { Pie, PieChart } from 'recharts';
import useChartData from '../CustomHooks/useChartData/useChartData';

const SimplePieChart = () => {
  const [chartData] = useChartData();
  // useEffect(() => {
  //   fetch('data.json')
  //     .then((res) => res.json())
  //     .then((chart) => setChartData(chart))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <PieChart
        width={400}
        height={400}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <Pie
          data={chartData}
          dataKey="sell"
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
