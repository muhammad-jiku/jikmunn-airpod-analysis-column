import React from 'react';
import SimpleAreaChart from '../SimpleAreaChart/SimpleAreaChart';
import SimpleBarChart from '../SimpleBarChart/SimpleBarChart';
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';
import SimplePieChart from '../SimplePieChart/SimplePieChart';

const Dashboard = () => {
  return (
    <div>
      <h2>This is Dashboard Page</h2>
      <SimpleLineChart />
      <SimpleAreaChart />
      <SimpleBarChart />
      <SimplePieChart />
    </div>
  );
};

export default Dashboard;
