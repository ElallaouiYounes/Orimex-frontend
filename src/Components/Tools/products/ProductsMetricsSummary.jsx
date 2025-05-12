import React from 'react';

const ProductsMetricsSummary = ({ products }) => {
  const totalProducts = products.length;
  const inStockProducts = products.filter(p => p.status === "In Stock").length;
  const outOfStockProducts = products.filter(p => p.status === "Out of Stock").length;
  const totalStockValue = products.reduce((sum, p) => {
    const price = parseFloat(p.price.replace(/[^0-9.]/g, ''));
    return sum + (price * p.stock);
  }, 0);

  const metrics = [
    { title: 'Total Products', value: totalProducts, change: '+8%' },
    { title: 'In Stock', value: inStockProducts, change: '+5%' },
    { title: 'Out of Stock', value: outOfStockProducts, change: '+2%' },
    { title: 'Total Inventory Value', value: `${totalStockValue.toLocaleString()} MAD`, change: '+12%' },
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

export default ProductsMetricsSummary;