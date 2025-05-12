import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DeliveryStatusChart = ({ deliveries }) => {
  const statusCounts = deliveries.reduce((acc, delivery) => {
    acc[delivery.status.name] = (acc[delivery.status.name] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          '#3b82f6', // blue (In Transit)
          '#10b981', // green (Delivered)
          '#f59e0b', // amber (Scheduled)
          '#8b5cf6', // violet (Out for Delivery)
          '#ef4444', // red (Delayed)
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
      <h3 className="font-medium text-gray-700 mb-4">Delivery Status</h3>
      <div className="h-64">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DeliveryStatusChart;