import React from 'react';

const InventoryMetricsSummary = ({ inventory }) => {
  const totalItems = inventory.length;
  const inStockItems = inventory.filter(i => i.status.name === "In Stock").length;
  const outOfStockItems = inventory.filter(i => i.status.name === "Out of Stock").length;
  const totalStockValue = inventory.reduce((sum, item) => {
    // This would normally come from your actual pricing data
    const averagePrice = 500; // Example average price in MAD
    return sum + (item.currentStock * averagePrice);
  }, 0);

  const metrics = [
    { title: 'Total Items', value: totalItems, change: '+12%' },
    { title: 'In Stock', value: inStockItems, change: '+8%' },
    { title: 'Out of Stock', value: outOfStockItems, change: '+2%' },
    { title: 'Total Inventory Value', value: `${totalStockValue.toLocaleString()} MAD`, change: '+15%' },
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

export default InventoryMetricsSummary;