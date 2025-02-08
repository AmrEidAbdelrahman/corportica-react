import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const BarChartComponent = ({ data, xAxisKey, yAxisKey, fillColor }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxisKey} />
      <YAxis />
      <Tooltip />
      <Bar dataKey={yAxisKey} fill={fillColor} />
    </BarChart>
  );
};

export default BarChartComponent;
