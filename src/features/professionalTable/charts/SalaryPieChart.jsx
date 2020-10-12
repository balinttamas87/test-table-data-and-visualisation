import React from "react";
import { Pie } from "react-chartjs-2";

const SalaryPieChart = ({ labels, data, backgroundColors }) => {
  
  const chartData = {
    labels,
    datasets: [
      {
        label: "Salary",
        data: data,
        backgroundColor: backgroundColors
      }
    ],
  };

  return (
    <div>
      <Pie
        data={chartData}
      />
    </div>
  );
};

export default SalaryPieChart;
