import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

const TransactionTrendChart = ({ transactions }) => {
  // Group transactions by date
  const dailyData = transactions.reduce((acc, transaction) => {
    const date = transaction.date;
    acc[date] = (acc[date] || 0) + parseFloat(transaction.amount.replace(/[^0-9.]/g, ''));
    return acc;
  }, {});

  // Sort dates chronologically
  const sortedDates = Object.keys(dailyData).sort();

  const data = {
    labels: sortedDates,
    datasets: [
      {
        label: 'Daily Transaction Amount (MAD)',
        data: sortedDates.map(date => dailyData[date]),
        borderColor: '#6366f1',
        backgroundColor: '#6366f1',
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
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
      <h3 className="font-medium text-gray-700 mb-4">Transaction Trend</h3>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TransactionTrendChart;