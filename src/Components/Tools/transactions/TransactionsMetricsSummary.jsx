import React from 'react';

const TransactionsMetricsSummary = ({ transactions }) => {
  const totalTransactions = transactions.length;
  const completedTransactions = transactions.filter(t => t.status.name === 'Completed').length;
  const totalAmount = transactions.reduce((sum, t) => {
    const amount = parseFloat(t.amount.replace(/[^0-9.]/g, ''));
    return sum + amount;
  }, 0);
  const avgTransaction = totalAmount / totalTransactions;

  const metrics = [
    { title: 'Total Transactions', value: totalTransactions, change: '+15%' },
    { title: 'Completed', value: completedTransactions, change: '+8%' },
    { title: 'Total Amount', value: `${totalAmount.toLocaleString()} MAD`, change: '+22%' },
    { title: 'Avg. Transaction', value: `${avgTransaction.toLocaleString(undefined, {maximumFractionDigits: 0})} MAD`, change: '+5%' },
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

export default TransactionsMetricsSummary;