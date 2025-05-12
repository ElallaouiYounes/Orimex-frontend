import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const CustomerActivityChart = ({ customers }) => {
  // Group customers by order count ranges
  const orderRanges = {
    '0': 0,
    '1-5': 0,
    '6-10': 0,
    '11-20': 0,
    '20+': 0
  };

  customers.forEach(customer => {
    const orders = customer.orders;
    if (orders === 0) orderRanges['0']++;
    else if (orders <= 5) orderRanges['1-5']++;
    else if (orders <= 10) orderRanges['6-10']++;
    else if (orders <= 20) orderRanges['11-20']++;
    else orderRanges['20+']++;
  });

  const data = {
    labels: Object.keys(orderRanges),
    datasets: [
      {
        label: 'Customers',
        data: Object.values(orderRanges),
        backgroundColor: '#6366f1',
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
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
      <h3 className="font-medium text-gray-700 mb-4">Customer Order Activity</h3>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default CustomerActivityChart;