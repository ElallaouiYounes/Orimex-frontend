import React from 'react';

const DeliveriesMetricsSummary = ({ deliveries }) => {
  const totalDeliveries = deliveries.length;
  const completedDeliveries = deliveries.filter(d => d.status.name === 'Delivered').length;
  const delayedDeliveries = deliveries.filter(d => d.status.name === 'Delayed').length;
  const inTransitDeliveries = deliveries.filter(d => 
    d.status.name === 'In Transit' || d.status.name === 'Out for Delivery'
  ).length;

  const metrics = [
    { title: 'Total Deliveries', value: totalDeliveries, change: '+15%' },
    { title: 'Completed', value: completedDeliveries, change: '+8%' },
    { title: 'In Transit', value: inTransitDeliveries, change: '+5%' },
    { title: 'Delayed', value: delayedDeliveries, change: '+2%' },
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

export default DeliveriesMetricsSummary;