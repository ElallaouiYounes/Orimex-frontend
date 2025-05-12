import React from 'react';

const LogisticsMetricsSummary = ({ fleet, warehouses }) => {
  const totalVehicles = fleet.length;
  const availableVehicles = fleet.filter(v => v.status.name === "Available").length;
  const inTransitVehicles = fleet.filter(v => v.status.name === "In Transit" || v.status.name === "On Delivery").length;
  
  const totalCapacity = warehouses.reduce((sum, w) => {
    const capacity = parseFloat(w.capacity.replace(/[^0-9.]/g, ''));
    return sum + capacity;
  }, 0);
  const avgUtilization = warehouses.reduce((sum, w) => sum + w.utilization, 0) / warehouses.length;

  const metrics = [
    { title: 'Total Vehicles', value: totalVehicles, change: '+5%' },
    { title: 'Available Vehicles', value: availableVehicles, change: '+2%' },
    { title: 'In Transit Vehicles', value: inTransitVehicles, change: '+3%' },
    { title: 'Avg. Warehouse Utilization', value: `${avgUtilization.toFixed(0)}%`, change: '-5%' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">{metric.title}</p>
          <div className="flex items-end justify-between mt-2">
            <p className="text-2xl font-semibold">{metric.value}</p>
            <span className={`text-xs px-2 py-1 rounded-full ${
              metric.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {metric.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogisticsMetricsSummary;