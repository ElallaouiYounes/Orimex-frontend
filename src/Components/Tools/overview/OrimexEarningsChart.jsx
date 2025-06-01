import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const OrimexEarningsChart = () => {
  const labels = [
    "07 Apr, Mon",
    "08 Apr, Tue",
    "09 Apr, Wed",
    "10 Apr, Thu",
    "11 Apr, Fri",
    "12 Apr, Sat",
    "13 Apr, Sun",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Glass & Mirror Earnings",
        data: [320000, 390000, 280000, 450000, 410000, 520000, 470000],
        borderColor: "#3b82f6", // blue-500
        backgroundColor: "#3b82f6",
        fill: false,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: "Decorative & Solar Glass Earnings",
        data: [260000, 300000, 250000, 310000, 360000, 480000, 490000],
        borderColor: "#d946ef", // fuchsia-500
        backgroundColor: "#d946ef",
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.formattedValue} MAD`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return value.toLocaleString("en-US") + " MAD";
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-md w-full max-w-5xl mx-auto relative">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-2xl font-semibold font-work text-gray-800">
          ORIMEX SA Earnings
        </h2>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default OrimexEarningsChart;
