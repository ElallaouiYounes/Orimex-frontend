import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PaymentMethodChart = ({ transactions }) => {
  const methodCounts = transactions.reduce((acc, transaction) => {
    acc[transaction.paymentMethod.name] = (acc[transaction.paymentMethod.name] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(methodCounts),
    datasets: [
      {
        data: Object.values(methodCounts),
        backgroundColor: [
          '#3b82f6', // blue
          '#8b5cf6', // violet
          '#10b981', // emerald
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
      <h3 className="font-medium text-gray-700 mb-4">Payment Methods</h3>
      <div className="h-64">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default PaymentMethodChart;