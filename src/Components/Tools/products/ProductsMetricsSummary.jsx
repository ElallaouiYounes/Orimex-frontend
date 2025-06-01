import React from "react";
import { FiPackage, FiCheckCircle, FiAlertCircle, FiXCircle } from "react-icons/fi";
import { TbChartLine } from "react-icons/tb";

const ProductsMetricsSummary = ({ products }) => {
  const totalProducts = products?.length || 0;
  const inStockProducts = products?.filter(p => p.stock_status === "in-stock").length || 0;
  const outOfStockProducts = products?.filter(p => p.stock_status === "out-of-stock").length || 0;
  const lowStockProducts = products?.filter(p => p.stock_status === "low-stock").length || 0;
  
  const totalStockValue = products?.reduce((sum, product) => {
    const price = parseFloat(product.price) || 0;
    return sum + (price * (product.current_stock || 0));
  }, 0) || 0;

  const metrics = [
    {
      title: "Total Products",
      value: totalProducts,
      change: "+8%",
      icon: FiPackage,
      iconColor: "text-[#4285F4]",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-100",
      trend: "up"
    },
    {
      title: "In Stock",
      value: inStockProducts,
      change: "+5%",
      icon: FiCheckCircle,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-100",
      trend: "up"
    },
    {
      title: "Low Stock",
      value: lowStockProducts,
      change: "+3%",
      icon: FiAlertCircle,
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-100",
      trend: "up"
    },
    {
      title: "Out of Stock",
      value: outOfStockProducts,
      change: "+2%",
      icon: FiXCircle,
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      borderColor: "border-red-100",
      trend: "down"
    },
    {
      title: "Products Value",
      value: `${totalStockValue.toLocaleString('en-US', {
        style: "decimal",
        maximumFractionDigits: 0,
      })} MAD`,
      change: "+12%",
      icon: TbChartLine,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-100",
      trend: "up"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`${metric.bgColor} p-2 rounded-lg border ${metric.borderColor} shadow-xs hover:shadow-sm transition-all duration-200 group hover:translate-y-[-2px]`}
        >
          <div className="flex justify-between items-start mb-2">
            <div className={`py-2 rounded-lg ${metric.iconColor.replace('text', 'bg')} bg-opacity-20`}>
              <metric.icon size={20} className={`${metric.iconColor}`} />
            </div>
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${
                metric.trend === "up"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {metric.change}
            </span>
          </div>

          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            {metric.title}
          </h3>
          <p className={`text-xl font-bold ${metric.textColor} mb-2`}>
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
            <span className="text-gray-400">vs last quarter</span>
          </div>

          {/* Progress bar for all metrics except Products Value */}
          {index !== 4 && (
            <div className="mt-3 w-full bg-gray-100 rounded-full h-1.5">
              <div 
                className={`h-full rounded-full ${metric.textColor.replace('text', 'bg')}`}
                style={{ 
                  width: `${Math.min(100, 
                    (metric.value / (totalProducts || 1)) * 100
                  )}%` 
                }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductsMetricsSummary;