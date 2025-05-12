import React from "react";
import {
  FaCogs,
  FaClock,
  FaCheckCircle,
  FaBoxOpen,
  FaTimesCircle,
} from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { closePoop } from "../../../Store/Reducers/navSlice";

const OrderInfo = ({ orderData }) => {
  const dispatch = useDispatch();

  // Default order data if not provided
  const order = orderData || {
    orderId: "LNIV-2025-001",
    customerName: "Casablanca Tower Contractors",
    orderDate: "2025-05-15",
    expectedDelivery: "2025-07-10",
    status: "In Production",
    productId: "PC-1220",
    productName: "Polycarbonate Sheet (10mm, Clear)",
    quantity: "150 sheets",
    dimensions: "1200x2400mm",
    thickness: "10mm",
    color: "Clear",
  };

  // Status mapping for icons and colors
  const statusConfig = {
    "In Production": {
      icon: FaCogs,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
    },
    "Shipped": {
      icon: TbTruckDelivery,
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
    },
    "Pending": {
      icon: FaClock,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
    },
    "Confirmed": {
      icon: FaCheckCircle,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    "Delivered": {
      icon: FaBoxOpen,
      color: "text-teal-600",
      bg: "bg-teal-50",
      border: "border-teal-200",
    },
    "Cancelled": {
      icon: FaTimesCircle,
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
    }
  };

  // Get status display info
  const statusInfo = statusConfig[order.status] || {
    icon: FaClock,
    color: "text-gray-600",
    bg: "bg-gray-50",
    border: "border-gray-200",
  };
  const StatusIcon = statusInfo.icon;

  return (
    <div className="h-full p-5 overflow-y-auto bg-white">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Order Details</h2>
        <button 
          onClick={() => dispatch(closePoop())}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {/* Status Badge */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-gray-700 mr-2">Order:</span>
            <span className="text-gray-800">{order.orderId || "N/A"}</span>
          </div>
          <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${statusInfo.bg} ${statusInfo.color} border ${statusInfo.border}`}>
            <StatusIcon className="text-sm" />
            <span>{order.status || "Unknown"}</span>
          </div>
        </div>

        {/* Order Information */}
        <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Order Information</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-xs text-gray-500">Customer</p>
              <p className="font-medium">{order.customerName || "N/A"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Order Date</p>
              <p className="font-medium">{order.orderDate || "N/A"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Expected Delivery</p>
              <p className="font-medium">{order.expectedDelivery || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Product Details</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-xs text-gray-500">Product ID</p>
              <p className="font-medium">{order.productId || "N/A"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Product Name</p>
              <p className="font-medium">{order.productName || "N/A"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Quantity</p>
              <p className="font-medium">{order.quantity || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Product Specifications</h3>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div>
              <p className="text-xs text-gray-500">Dimensions</p>
              <p className="font-medium">{order.dimensions || "N/A"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Thickness</p>
              <p className="font-medium">{order.thickness || "N/A"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Color</p>
              <p className="font-medium">{order.color || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-3 flex gap-2 justify-end">
          <button
            type="button"
            className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 border border-gray-300 transition-colors"
            onClick={() => dispatch(closePoop())}
          >
            Close
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Edit Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;