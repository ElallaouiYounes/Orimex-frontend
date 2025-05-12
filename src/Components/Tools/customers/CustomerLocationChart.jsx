import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CustomerLocationChart = ({ customers }) => {
  const locationCounts = customers.reduce((acc, customer) => {
    acc[customer.location] = (acc[customer.location] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(locationCounts),
    datasets: [
      {
        data: Object.values(locationCounts),
        backgroundColor: [
          '#3b82f6', // blue
          '#10b981', // emerald
          '#f59e0b', // amber
          '#ef4444', // red
          '#8b5cf6', // violet
          '#ec4899', // pink
          '#14b8a6', // teal
          '#f97316', // orange
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
    cutout: '60%',
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm h-full">
      <h3 className="font-medium text-gray-700 mb-4">Customer Locations</h3>
      <div className="h-64">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default CustomerLocationChart;