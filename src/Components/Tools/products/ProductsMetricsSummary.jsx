import React from "react";
import { FiPackage, FiCheckCircle, FiXCircle, FiDollarSign } from "react-icons/fi";
import { TbChartLine } from "react-icons/tb";

const ProductsMetricsSummary = ({ products }) => {
  const totalProducts = products.length;
  const inStockProducts = products.filter(p => p.status === "In Stock").length;
  const outOfStockProducts = products.filter(p => p.status === "Out of Stock").length;
  const totalStockValue = products.reduce((sum, p) => {
    const price = parseFloat(p.price.replace(/[^0-9.]/g, ''));
    return sum + (price * p.stock);
  }, 0);

  const metrics = [
    {
      title: "Total Products",
      value: totalProducts,
      change: "+8%",
      icon: FiPackage,
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-100",
    },
    {
      title: "In Stock",
      value: inStockProducts,
      change: "+5%",
      icon: FiCheckCircle,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-100",
    },
    {
      title: "Out of Stock",
      value: outOfStockProducts,
      change: "+2%",
      icon: FiXCircle,
      iconColor: "text-rose-500",
      bgColor: "bg-rose-50",
      textColor: "text-rose-600",
      borderColor: "border-rose-100",
    },
    {
      title: "Inventory Value",
      value: `${totalStockValue.toLocaleString()} MAD`,
      change: "+12%",
      icon: TbChartLine,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-100",
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
                metric.change.startsWith("+")
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

          {/* Enhanced trend indicator */}
          <div className="flex items-center text-xs text-gray-500">
            <span
              className={`mr-1 ${
                metric.change.startsWith("+")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {metric.change.startsWith("+") ? "↑" : "↓"}{" "}
              {metric.change.replace("+", "")}
            </span>
            <span>vs last period</span>
          </div>

          {/* Optional: Add a subtle progress bar for visual interest */}
          <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
            <div 
              className={`h-1 rounded-full ${metric.textColor.replace('text', 'bg')}`}
              style={{ width: `${Math.min(100, (metric.value / (index === 3 ? totalStockValue/10000 : totalProducts)) * 100)}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsMetricsSummary;