import React from 'react';
import BarChart from './chrats/BarChart';
import PieChart from './chrats/PieChart';
import LineChart from './chrats/LineChart';
import { useSelector } from 'react-redux';

const ChartContainer = () => {  
  const filteredData = useSelector((state) => state.data.filteredData);

  if (!filteredData) {
    return "<div>Loading...</div>";
  }
  
  const averageSalaryByYear = filteredData.reduce((acc, curr) => {
    const { work_year, salary_in_usd } = curr;
    if (!acc[work_year]) {
      acc[work_year] = { total: 0, count: 0 };
    }
    acc[work_year].total += salary_in_usd;
    acc[work_year].count += 1;
    return acc;
  }, {});
  
  const averageSalaryData = Object.keys(averageSalaryByYear).map((job) => ({
    job_title: job,
    average_salary: averageSalaryByYear[job].total / averageSalaryByYear[job].count,
  }));


  const remoteRatioData = filteredData.reduce((acc, curr) => {
    const { remote_ratio } = curr;
    if (!acc[remote_ratio]) {
      acc[remote_ratio] = 0;
    }
    acc[remote_ratio] += 1;
    return acc;
  }, {});

  const salaryCurrencyData = filteredData.reduce((acc, curr) => {
    const { salary_currency } = curr;
    if (!acc[salary_currency]) {
      acc[salary_currency] = 0;
    }
    acc[salary_currency] += 1;
    return acc;
  }, {});
  
  
  const remoteRatioChartData = Object.keys(remoteRatioData).map((ratio) => ({
    name: `${ratio}% Remote`,
    value: remoteRatioData[ratio],
  }));

  const salaryCurrencyChartData = Object.keys(salaryCurrencyData).map((currency) => ({
    name: currency,
    value: salaryCurrencyData[currency],
  }));
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];



  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Salary Dataset</h2>
      <div className="flex flex-wrap gap-x-10 gap-y-10">
        <div >
          <BarChart
            data={averageSalaryData}
            xAxisKey="job_title"
            yAxisKey="average_salary"
            fillColor="#8884d8"
          />
        </div>
        <div >
          <PieChart data={remoteRatioChartData} colors={COLORS} />
        </div>
        <div >
          <PieChart data={salaryCurrencyChartData} colors={COLORS} />
        </div>
        <div >
          <LineChart data={averageSalaryData} xAxisKey="job_title" yAxisKey="average_salary" />
        </div>
      </div>
    </div>
  );
};

export default ChartContainer;
