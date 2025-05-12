import React, { useState } from "react";
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

const AddOrder = () => {
  const dispatch = useDispatch();
  
  // Form state
  const [orderId, setOrderId] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState('In Production');
  const [expectedDelivery, setExpectedDelivery] = useState('');

  const statusOptions = [
    {
      name: "In Production",
      icon: FaCogs,
      color: "text-purple-600",
      bg: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverBg: "hover:bg-purple-100",
    },
    {
      name: "Shipped",
      icon: TbTruckDelivery,
      color: "text-green-600",
      bg: "bg-green-50",
      borderColor: "border-green-200",
      hoverBg: "hover:bg-green-100",
    },
    {
      name: "Pending",
      icon: FaClock,
      color: "text-amber-600",
      bg: "bg-amber-50",
      borderColor: "border-amber-200",
      hoverBg: "hover:bg-amber-100",
    },
    {
      name: "Confirmed",
      icon: FaCheckCircle,
      color: "text-blue-600",
      bg: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverBg: "hover:bg-blue-100",
    },
    {
      name: "Delivered",
      icon: FaBoxOpen,
      color: "text-teal-600",
      bg: "bg-teal-50",
      borderColor: "border-teal-200",
      hoverBg: "hover:bg-teal-100",
    },
    {
      name: "Cancelled",
      icon: FaTimesCircle,
      color: "text-red-600",
      bg: "bg-red-50",
      borderColor: "border-red-200",
      hoverBg: "hover:bg-red-100",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      order_id: orderId,
      customer_id: customerId,
      product_id: productId,
      quantity: quantity,
      expected_delivery: expectedDelivery,
      status: status
    };

    console.log("Form submitted:", formData);
    dispatch(closePoop());
  };

  return (
    <div className="h-full p-5 overflow-y-auto bg-white">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Add New Order</h2>
        <button 
          onClick={() => dispatch(closePoop())}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Basic Info Section */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              ORDER ID
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="ORD-123"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              CUSTOMER ID
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="CUST-2024-001"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
            />
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              PRODUCT ID
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="PROD-001"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              QUANTITY
            </label>
            <input
              type="number"
              min="1"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
          </div>
        </div>

        {/* Expected Delivery */}
        <div className="relative">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            EXPECTED DELIVERY
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            value={expectedDelivery}
            onChange={(e) => setExpectedDelivery(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Status Buttons */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            STATUS
          </label>
          <div className="grid grid-cols-3 gap-2">
            {statusOptions.map((option) => (
              <button
                key={option.name}
                type="button"
                onClick={() => setStatus(option.name)}
                className={`flex items-center justify-center space-x-1 px-2 py-2 rounded-md text-xs border transition-all ${
                  option.bg
                } ${option.color} ${option.borderColor} ${option.hoverBg} ${
                  status === option.name 
                    ? "ring-2 ring-blue-500 shadow-sm" 
                    : ""
                }`}
              >
                <option.icon className="text-sm" />
                <span>{option.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 flex gap-2 justify-end">
          <button
            type="button"
            className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 border border-gray-300 transition-colors"
            onClick={() => dispatch(closePoop())}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Save Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrder;