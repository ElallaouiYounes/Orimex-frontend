import React from "react";
import { FiUsers, FiUserCheck, FiUser, FiLayers } from "react-icons/fi";

const TeamMetricsSummary = ({ team }) => {
  const totalEmployees = team.length;
  const activeEmployees = team.filter(e => e.status === "working").length;
  const femaleEmployees = team.filter(e => e.gender === "female").length;
  const departments = [...new Set(team.map(member => member.department))];

  const metrics = [
    {
      title: "Total Employees",
      value: totalEmployees,
      change: "+8%",
      icon: FiUsers,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-100",
      trend: "up"
    },
    {
      title: "Active Employees",
      value: activeEmployees,
      change: "+5%",
      icon: FiUserCheck,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-100",
      trend: "up"
    },
    {
      title: "Female Employees",
      value: femaleEmployees,
      change: "+12%",
      icon: FiUser,
      iconColor: "text-pink-500",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      borderColor: "border-pink-100",
      trend: "up"
    },
    {
      title: "Departments",
      value: departments.length,
      change: "+1",
      icon: FiLayers,
      iconColor: "text-violet-500",
      bgColor: "bg-violet-50",
      textColor: "text-violet-600",
      borderColor: "border-violet-100",
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
            <span>
              {metric.change.startsWith("+") || metric.change.startsWith("-")
                ? `vs last quarter`
                : `new addition`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMetricsSummary;