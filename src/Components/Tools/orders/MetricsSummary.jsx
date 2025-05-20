import React from "react";
import { FiPackage, FiCheckCircle, FiX, FiTruck } from "react-icons/fi";

const MetricsSummary = ({ orders }) => {
  const totalOrders = orders.length;
  const deliveredOrders = orders.filter(o => o.status.name === 'Delivered').length;
  const cancelledOrders = orders.filter(o => o.status.name === 'Cancelled').length;

  const metrics = [
    {
      title: "Total Orders",
      value: totalOrders,
      change: "+12%",
      icon: FiPackage,
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-100",
      trend: "up"
    },
    {
      title: "Completed",
      value: deliveredOrders,
      change: "+5%",
      icon: FiCheckCircle,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-100",
      trend: "up"
    },
    {
      title: "Cancelled",
      value: cancelledOrders,
      change: "-2%",
      icon: FiX,
      iconColor: "text-rose-500",
      bgColor: "bg-rose-50",
      textColor: "text-rose-600",
      borderColor: "border-rose-100",
      trend: "down"
    },
    {
      title: "Avg. Delivery",
      value: "18 days",
      change: "-3 days",
      icon: FiTruck,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-100",
      trend: "down"
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
            <span>
              {metric.change.startsWith("+") || metric.change.startsWith("-")
                ? `vs last period`
                : `improvement`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsSummary;