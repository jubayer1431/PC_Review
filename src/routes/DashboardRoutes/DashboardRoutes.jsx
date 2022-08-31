import React from "react";
import {Bar, CartesianGrid, Legend, BarChart, Tooltip, XAxis, YAxis} from "recharts";
import {useChartData} from "../../hooks/chartDataHook";

const DashboardRoutes = () => {
  const [chartData] = useChartData();


  return    <div className={'flex items-center justify-center mt-16'}>
    <BarChart  width={1080} height={720} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="investment" fill="#8884d8" />
      <Bar dataKey="sell" fill="#8884d8" />
      <Bar dataKey="revenue" fill="#82ca9d" />
    </BarChart>
  </div>
     ;
};

export default DashboardRoutes;
