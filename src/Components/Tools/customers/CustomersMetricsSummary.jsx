import React from 'react';

const CustomersMetricsSummary = ({ customers }) => {
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.status.name === 'Active').length;
  const pendingCustomers = customers.filter(c => c.status.name === 'Pending Approval').length;
  const avgOrders = (customers.reduce((sum, c) => sum + c.orders, 0) / totalCustomers);

  const metrics = [
    { title: 'Total Customers', value: totalCustomers, change: '+8%' },
    { title: 'Active', value: activeCustomers, change: '+5%' },
    { title: 'Pending Approval', value: pendingCustomers, change: '+3%' },
    { title: 'Avg. Orders/Customer', value: avgOrders.toFixed(1), change: '+1.2' },
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

export default CustomersMetricsSummary;