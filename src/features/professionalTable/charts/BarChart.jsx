import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ labels, title, data, backgroundColors }) => {
  
  const chartData = {
    labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColors,
        borderWidth: 4,
      }
    ],
  };

  const options = {
    title: {
      display: true,
      text: title,
      fontStyle: "bold",
      fontSize: 20,
      padding: 20
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  return (
    <div>
      <Bar
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default BarChart;
