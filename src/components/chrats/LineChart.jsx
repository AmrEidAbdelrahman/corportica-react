import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const LineChartComponent = ({ data, xAxisKey, yAxisKey, strokeColor }) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxisKey} />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey={yAxisKey} stroke={strokeColor} />
    </LineChart>
  );
};

export default LineChartComponent;
