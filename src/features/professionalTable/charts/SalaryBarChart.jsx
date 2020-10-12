import React from "react";
import { Bar } from "react-chartjs-2";

const SalaryBarChart = ({ labels, data, backgroundColors }) => {
  
  const chartData = {
    labels,
    datasets: [
      {
        label: "Salary",
        data: data,
        backgroundColor: backgroundColors,
        borderWidth: 4,
      }
    ],
  };

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default SalaryBarChart;
