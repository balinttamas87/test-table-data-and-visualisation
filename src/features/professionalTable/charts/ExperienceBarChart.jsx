import React from "react";
import { Bar } from "react-chartjs-2";

const ExperienceBarChart = ({ labels, data, backgroundColors }) => {
  
  const chartData = {
    labels,
    datasets: [
      {
        label: "Years of experience",
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

export default ExperienceBarChart;
