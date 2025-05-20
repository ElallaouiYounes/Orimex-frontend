import React from "react";
import { FiTruck, FiCheckCircle, FiClock, FiPackage } from "react-icons/fi";

const LogisticsMetricsSummary = ({ fleet, warehouses }) => {
  const totalVehicles = fleet.length;
  const availableVehicles = fleet.filter(v => v.status.name === "Available").length;
  const inTransitVehicles = fleet.filter(v => v.status.name === "In Transit" || v.status.name === "On Delivery").length;
  
  const totalCapacity = warehouses.reduce((sum, w) => {
    const capacity = parseFloat(w.capacity.replace(/[^0-9.]/g, ''));
    return sum + capacity;
  }, 0);
  const avgUtilization = warehouses.reduce((sum, w) => sum + w.utilization, 0) / warehouses.length;

  const metrics = [
    {
      title: "Total Vehicles",
      value: totalVehicles,
      change: "+5%",
      icon: FiTruck,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-100",
      trend: "up"
    },
    {
      title: "Available Vehicles",
      value: availableVehicles,
      change: "+2%",
      icon: FiCheckCircle,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-100",
      trend: "up"
    },
    {
      title: "In Transit Vehicles",
      value: inTransitVehicles,
      change: "+3%",
      icon: FiClock,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-100",
      trend: "up"
    },
    {
      title: "Warehouse Utilization",
      value: `${avgUtilization.toFixed(0)}%`,
      change: "-5%",
      icon: FiPackage,
      iconColor: "text-violet-500",
      bgColor: "bg-violet-50",
      textColor: "text-violet-600",
      borderColor: "border-violet-100",
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
            <span>vs last month</span>
          </div>

          {/* Optional utilization bar for warehouse metric */}
          {index === 3 && (
            <div className="mt-3 w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="h-full bg-violet-500 rounded-full"
                style={{ width: `${avgUtilization}%` }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LogisticsMetricsSummary;