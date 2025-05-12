import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const WarehouseCapacityChart = ({ warehouses }) => {
  const data = {
    labels: warehouses.map(w => w.name),
    datasets: [
      {
        label: 'Utilization %',
        data: warehouses.map(w => w.utilization),
        backgroundColor: warehouses.map(w => 
          w.utilization > 85 ? '#ef4444' : 
          w.utilization > 70 ? '#f59e0b' : '#10b981'
        ),
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
        max: 100,
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
      <h3 className="font-medium text-gray-700 mb-4">Warehouse Utilization</h3>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default WarehouseCapacityChart;