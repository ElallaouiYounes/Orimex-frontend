import React from 'react';

const DeliveriesMetricsSummary = ({ deliveries }) => {
  const totalDeliveries = deliveries.length;
  const completedDeliveries = deliveries.filter(d => d.status.name === 'Delivered').length;
  const delayedDeliveries = deliveries.filter(d => d.status.name === 'Delayed').length;
  const inTransitDeliveries = deliveries.filter(d => 
    d.status.name === 'In Transit' || d.status.name === 'Out for Delivery'
  ).length;

  const metrics = [
    { 
      title: 'Total Deliveries', 
      value: totalDeliveries, 
      change: '+15%',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-100'
    },
    { 
      title: 'Completed', 
      value: completedDeliveries, 
      change: '+8%',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-100'
    },
    { 
      title: 'In Transit', 
      value: inTransitDeliveries, 
      change: '+5%',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-100'
    },
    { 
      title: 'Delayed', 
      value: delayedDeliveries, 
      change: '+2%',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      borderColor: 'border-amber-100'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div 
          key={index} 
          className={`${metric.bgColor} p-5 rounded-xl border ${metric.borderColor} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">{metric.title}</p>
              <p className={`text-3xl font-bold ${metric.textColor}`}>{metric.value}</p>
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${metric.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {metric.change}
            </span>
          </div>
          
          {/* Progress indicator (optional) */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full ${metric.textColor.replace('text', 'bg')}`}
                style={{ width: `${(metric.value / totalDeliveries) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{Math.round((metric.value / totalDeliveries) * 100)}% of total</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliveriesMetricsSummary;