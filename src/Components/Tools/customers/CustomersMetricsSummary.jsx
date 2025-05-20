import React from "react";
import { FiUsers, FiUserCheck, FiShoppingBag } from "react-icons/fi";
import { FaUserClock } from "react-icons/fa";

const CustomersMetricsSummary = ({ customers }) => {
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.status.name === 'Active').length;
  const pendingCustomers = customers.filter(c => c.status.name === 'Pending Approval').length;
  const avgOrders = (customers.reduce((sum, c) => sum + c.orders, 0) / totalCustomers).toFixed(1);

  const metrics = [
    {
      title: "Total Customers",
      value: totalCustomers,
      change: "+8%",
      icon: FiUsers,
      iconColor: "text-violet-500",
      bgColor: "bg-violet-50",
      textColor: "text-violet-600",
      borderColor: "border-violet-100"
    },
    {
      title: "Active",
      value: activeCustomers,
      change: "+5%",
      icon: FiUserCheck,
      iconColor: "text-teal-500",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      borderColor: "border-teal-100"
    },
    {
      title: "Pending Approval",
      value: pendingCustomers,
      change: "+3%",
      icon: FaUserClock,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-100"
    },
    {
      title: "Avg. Orders/Customer",
      value: avgOrders,
      change: "+1.2",
      icon: FiShoppingBag,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-100"
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
        </div>
      ))}
    </div>
  );
};

export default CustomersMetricsSummary;