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
  // useEffect(() => {
  //   fetch('data.json')
  //     .then((res) => res.json())
  //     .then((chart) => setChartData(chart))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <LineChart
        width={500}
        height={300}
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
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </div>
  );
};

export default SimpleLineChart;
