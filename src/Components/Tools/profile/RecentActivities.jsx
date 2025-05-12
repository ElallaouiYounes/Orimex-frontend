import React from 'react';
import { FaFileAlt, FaShoppingCart, FaUserEdit, FaCheckCircle } from "react-icons/fa";

const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      icon: <FaFileAlt className="text-blue-500" />,
      action: "Created new order",
      details: "Order #LNIV-2024-015",
      time: "2 hours ago",
    },
    {
      id: 2,
      icon: <FaShoppingCart className="text-green-500" />,
      action: "Approved shipment",
      details: "For Casablanca Tower Contractors",
      time: "5 hours ago",
    },
    {
      id: 3,
      icon: <FaUserEdit className="text-purple-500" />,
      action: "Updated profile",
      details: "Changed contact information",
      time: "1 day ago",
    },
    {
      id: 4,
      icon: <FaCheckCircle className="text-amber-500" />,
      action: "Completed task",
      details: "Monthly financial report",
      time: "2 days ago",
    },
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
          <div className="p-2 rounded-lg bg-gray-100">
            {activity.icon}
          </div>
          <div className="flex-1">
            <p className="font-medium">{activity.action}</p>
            <p className="text-sm text-gray-500">{activity.details}</p>
          </div>
          <span className="text-xs text-gray-400">{activity.time}</span>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;