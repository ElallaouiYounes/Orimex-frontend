import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const StockMovementChart = ({ inventory }) => {
  // This would normally come from your actual movement data
  const movementData = {
    "Polycarbonate": { in: 120, out: 85 },
    "Aluminum": { in: 95, out: 110 },
    "Glass": { in: 150, out: 180 },
    "Mirror": { in: 60, out: 55 },
  };

  const data = {
    labels: Object.keys(movementData),
    datasets: [
      {
        label: 'Stock In',
        data: Object.values(movementData).map(item => item.in),
        backgroundColor: '#10b981',
        borderRadius: 6,
      },
      {
        label: 'Stock Out',
        data: Object.values(movementData).map(item => item.out),
        backgroundColor: '#ef4444',
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm h-full">
      <h3 className="font-medium text-gray-700 mb-4">Stock Movement (Last 30 Days)</h3>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default StockMovementChart;