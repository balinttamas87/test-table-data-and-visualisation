import React from "react";
import { Pie } from "react-chartjs-2";

const ExperiencePieChart = ({ labels, data, backgroundColors }) => {

  const chartData = {
    labels,
    datasets: [
      {
        label: "Years of experience",
        data: data,
        backgroundColor: backgroundColors,
      },
    ],
  };

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

export default ExperiencePieChart;
