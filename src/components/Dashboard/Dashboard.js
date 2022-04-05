import React from 'react';
import SimpleAreaChart from '../SimpleAreaChart/SimpleAreaChart';
import SimpleBarChart from '../SimpleBarChart/SimpleBarChart';
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';
import SimplePieChart from '../SimplePieChart/SimplePieChart';

const Dashboard = () => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:mx-10">
        <SimpleLineChart />
        <SimpleAreaChart />
        <SimpleBarChart />
        <SimplePieChart />
      </div>
    </div>
  );
};

export default Dashboard;
