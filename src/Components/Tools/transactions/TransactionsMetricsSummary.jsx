import React from "react";
import { IoIosDoneAll } from "react-icons/io";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { HiMiniChartBarSquare } from "react-icons/hi2";
import { LuChartNoAxesCombined } from "react-icons/lu";

const TransactionsMetricsSummary = ({ transactions }) => {
  const totalTransactions = transactions.length;
  const completedTransactions = transactions.filter(
    (t) => t.status.name === "Completed"
  ).length;
  const totalAmount = transactions.reduce((sum, t) => {
    const amount = parseFloat(t.amount.replace(/[^0-9.]/g, ""));
    return sum + amount;
  }, 0);
  const avgTransaction = totalAmount / totalTransactions;

  const metrics = [
    {
      title: "Total Transactions",
      value: totalTransactions,
      change: "+15%",
      icon: HiMiniChartBarSquare,
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-100",
    },
    {
      title: "Completed",
      value: completedTransactions,
      change: "+8%",
      icon: IoIosDoneAll,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-100",
    },
    {
      title: "Total Amount",
      value: `${totalAmount.toLocaleString()} MAD`,
      change: "+22%",
      icon: RiMoneyDollarBoxFill,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-100",
    },
    {
      title: "Avg. Transaction",
      value: `${avgTransaction.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })} MAD`,
      change: "+5%",
      icon: LuChartNoAxesCombined,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-100",
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

          {/* Optional trend indicator */}
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

export default TransactionsMetricsSummary;
