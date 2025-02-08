import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const SalaryDensityChart = ({ data }) => {
  return (
    <AreaChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="salary" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="density" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default SalaryDensityChart;
