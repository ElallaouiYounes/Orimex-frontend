import React, { useState } from "react";
import { FcSalesPerformance } from "react-icons/fc";
import { ClipboardList } from "lucide-react";
import { GrStorage } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { IoTrendingUp, IoTrendingDown } from "react-icons/io5";

const Overview = () => {
  const cards = [
    {
      id: 1,
      name: "Total Sales",
      icon: FcSalesPerformance,
      Color: "text-blue-600",
      value: "2,450,000.00 MAD",
      rate: 0.48,
      rateIcon: IoTrendingUp,
      rateColor: "text-green-600",
      Bg:"bg-blue-50",
      HovBg:"bg-blue-100",
      iconBg:"bg-green-50"
    },
    {
      id: 2,
      name: "Total Orders",
      icon: ClipboardList,
      Color: "text-purple-600",
      value: "3,901",
      rate: 0.11,
      rateIcon: IoTrendingUp,
      rateColor: "text-green-600",
      Bg:"bg-purple-50",
      HovBg:"bg-purple-100",
      iconBg:"bg-green-50"
    },
    {
      id: 3,
      name: "Inventory Level",
      icon: GrStorage,
      Color: "text-amber-600",
      value: "76.87%",
      rate: 23.13,
      rateIcon: IoTrendingDown,
      rateColor: "text-red-600",
      Bg:"bg-amber-50",
      HovBg:"bg-amber-100",
      iconBg:"bg-red-50"
    },
    {
      id: 4,
      name: "Total Employees",
      icon: FiUsers,
      Color: "text-emerald-600",
      value: "450",
      rate: 0.48,
      rateIcon: IoTrendingUp,
      rateColor: "text-green-600",
      Bg:"bg-emerald-50",
      HovBg:"bg-emerald-100",
      iconBg:"bg-green-50"
    },
  ];

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const currentMonthName = monthNames[month];

  return (
    <div className="w-full h-[calc(100vh-180px)] overflow-y-auto pb-6">
      {/* Cards */}
      <div className="w-full h-32 flex items-center gap-4">
        {/* 1st Card - Total Sales */}
        {cards.map((item) =>
        <div className="h-full w-[24.1%] rounded-lg bg-white border border-gray-100 shadow-xs hover:shadow-sm transition-shadow flex flex-col px-4 py-3 relative group"
        key={item.id}
        >
          <div className="w-full h-[33.33%] flex justify-between items-start">
            <p className="text-lg font-work font-medium text-gray-500">
              {item.name}
            </p>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 ${item.Bg} group-hover:${item.HovBg} transition-colors absolute right-3 top-3`}>
              <item.icon
                size={20}
                className={`opacity-90 ${item.Color}`}
              />
            </div>
          </div>
          <div className="w-full h-[33.33%] flex items-center">
            <p className="text-lg font-semibold text-gray-800 font-work">
              {item.value}
            </p>
          </div>
          <div className="w-full h-[33.33%] flex items-center gap-3">
            <div className={`flex items-center gap-1 px-2 py-1 ${item.rateColor} ${item.iconBg} rounded-full`}>
              <item.rateIcon size={14} />
              <p className="text-xs font-medium">{item.rate}%</p>
            </div>
            <p className="text-gray-400 font-work text-xs">
              Data per {day} {currentMonthName} {year}
            </p>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default Overview;
