import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ labels, title, data, secondaryData, backgroundColors }) => {
  let datasets = [
    {
      data: data,
      backgroundColor: backgroundColors,
      borderWidth: 4,
    },
  ];

  if (secondaryData) {
    datasets = [
      ...datasets,
      {
        data: secondaryData,
        borderWidth: 4,
        type: "bar"
      },
    ];
  }

  const chartData = {
    labels,
    datasets,
  };

  const options = {
    title: {
      display: true,
      text: title,
      fontStyle: "bold",
      fontSize: 20,
      padding: 20,
    },
    legend: {
      display: false,
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
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
