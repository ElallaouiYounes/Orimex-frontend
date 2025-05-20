import React from "react";
import { FiBox, FiCheckCircle, FiXCircle, FiDollarSign } from "react-icons/fi";

const InventoryMetricsSummary = ({ inventory }) => {
  const totalItems = inventory.length;
  const inStockItems = inventory.filter(i => i.status.name === "In Stock").length;
  const outOfStockItems = inventory.filter(i => i.status.name === "Out of Stock").length;
  const totalStockValue = inventory.reduce((sum, item) => {
    const averagePrice = 500; // Example average price in MAD
    return sum + (item.currentStock * averagePrice);
  }, 0);

  const metrics = [
    {
      title: "Total Items",
      value: totalItems,
      change: "+12%",
      icon: FiBox,
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-100",
      trend: "up"
    },
    {
      title: "In Stock",
      value: inStockItems,
      change: "+8%",
      icon: FiCheckCircle,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-100",
      trend: "up"
    },
    {
      title: "Out of Stock",
      value: outOfStockItems,
      change: "+2%",
      icon: FiXCircle,
      iconColor: "text-rose-500",
      bgColor: "bg-rose-50",
      textColor: "text-rose-600",
      borderColor: "border-rose-100",
      trend: "up"
    },
    {
      title: "Inventory Value",
      value: `${totalStockValue.toLocaleString()} MAD`,
      change: "+15%",
      icon: FiDollarSign,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-100",
      trend: "up"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`${metric.bgColor} p-5 rounded-xl border ${metric.borderColor} shadow-sm hover:shadow-md transition-all duration-300 group`}
        >
          <div className="flex justify-between items-start mb-3">
            <metric.icon size={25} className={`${metric.iconColor}`} />
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                metric.trend === "up"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {metric.change}
            </span>
          </div>

          <h3 className="text-sm font-medium text-gray-500 mb-1">
            {metric.title}
          </h3>
          <p className={`text-2xl font-bold ${metric.textColor} mb-3`}>
            {metric.value}
          </p>

          <div className="flex items-center text-xs text-gray-500">
            <span
              className={`mr-1 ${
                metric.trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {metric.trend === "up" ? "↑" : "↓"}
            </span>
            <span>vs last quarter</span>
          </div>

          {/* Optional inventory progress bar */}
          {index !== 3 && (
            <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className={`h-full ${metric.textColor.replace('text', 'bg')}`}
                style={{ width: `${(metric.value / totalItems) * 100}%` }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InventoryMetricsSummary;