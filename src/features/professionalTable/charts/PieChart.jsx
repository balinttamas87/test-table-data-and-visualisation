import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ labels, title, data, backgroundColors }) => {

  const chartData = {
    labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: title,
      fontStyle: "bold",
      fontSize: 20,
      padding: 20
    }
  };

  return (
    <div>
      <Pie data={chartData} options={options}/>
    </div>
  );
};

export default PieChart;
