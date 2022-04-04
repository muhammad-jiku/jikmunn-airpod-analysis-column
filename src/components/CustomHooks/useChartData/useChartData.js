import { useEffect, useState } from 'react';

const useChartData = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((chart) => setChartData(chart))
      .catch((err) => console.log(err));
  }, []);
  return [chartData, setChartData];
};

export default useChartData;
