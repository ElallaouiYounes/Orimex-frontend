import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const ProductStockChart = ({ products }) => {
  // Get top 5 products by stock
  const sortedProducts = [...products].sort((a, b) => b.stock - a.stock).slice(0, 5);

  const data = {
    labels: sortedProducts.map(p => p.name),
    datasets: [
      {
        label: 'Stock Quantity',
        data: sortedProducts.map(p => p.stock),
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
      <h3 className="font-medium text-gray-700 mb-4">Top Products by Stock</h3>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ProductStockChart;