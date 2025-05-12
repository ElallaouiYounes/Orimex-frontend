import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DepartmentDistributionChart = ({ team }) => {
  const departmentCounts = team.reduce((acc, member) => {
    acc[member.department] = (acc[member.department] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(departmentCounts),
    datasets: [
      {
        data: Object.values(departmentCounts),
        backgroundColor: [
          '#3b82f6', // blue (Management)
          '#8b5cf6', // violet (HR)
          '#ec4899', // pink (Marketing)
          '#10b981', // green (Sales)
          '#6366f1', // indigo (Technology)
          '#f59e0b', // amber (Logistics)
          '#ef4444', // red (Security)
          '#14b8a6', // teal (Finance)
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
      <h3 className="font-medium text-gray-700 mb-4">Department Distribution</h3>
      <div className="h-64">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default DepartmentDistributionChart;