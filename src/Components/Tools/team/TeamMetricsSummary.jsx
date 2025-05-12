import React from 'react';

const TeamMetricsSummary = ({ team }) => {
  const totalEmployees = team.length;
  const activeEmployees = team.filter(e => e.status.name === "Active").length;
  const femaleEmployees = team.filter(e => e.gender === "Female").length;
  const departments = [...new Set(team.map(member => member.department))];

  const metrics = [
    { title: 'Total Employees', value: totalEmployees, change: '+8%' },
    { title: 'Active Employees', value: activeEmployees, change: '+5%' },
    { title: 'Female Employees', value: femaleEmployees, change: '+12%' },
    { title: 'Departments', value: departments.length, change: '+1' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">{metric.title}</p>
          <div className="flex items-end justify-between mt-2">
            <p className="text-2xl font-semibold">{metric.value}</p>
            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
              {metric.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMetricsSummary;