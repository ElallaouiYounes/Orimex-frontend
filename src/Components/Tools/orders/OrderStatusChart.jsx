import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const OrderStatusChart = ({ orders }) => {
  const statusCounts = orders.reduce((acc, order) => {
    acc[order.status.name] = (acc[order.status.name] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          '#a855f7', // purple
          '#22c55e', // green
          '#f59e0b', // amber
          '#3b82f6', // blue
          '#14b8a6', // teal
          '#ef4444', // red
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
    cutout: '70%',
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm h-full">
      <h3 className="font-medium text-gray-700 mb-4">Order Status Distribution</h3>
      <div className="h-64">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default OrderStatusChart;