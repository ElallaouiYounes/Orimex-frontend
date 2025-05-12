import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const FleetStatusChart = ({ fleet }) => {
  const statusCounts = fleet.reduce((acc, vehicle) => {
    acc[vehicle.status.name] = (acc[vehicle.status.name] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          '#10b981', // green (Available)
          '#3b82f6', // blue (In Transit)
          '#8b5cf6', // violet (On Delivery)
          '#f59e0b', // amber (Maintenance)
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
      <h3 className="font-medium text-gray-700 mb-4">Fleet Status Distribution</h3>
      <div className="h-64">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default FleetStatusChart;