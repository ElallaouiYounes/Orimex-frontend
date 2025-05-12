import React from "react";
import {
  FaSearch,
  FaFilter,
  FaSort,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openPoop } from "../../../Store/Reducers/navSlice";

const ModernOrdersHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-fullshadow-sm py-6">
      {/* Top section with title and create button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Orders Management</h1>
          <p className="text-gray-500 text-sm">Manage and track your glass product orders</p>
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-sm" onClick={() => dispatch(openPoop())}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create New Order
        </button>
      </div>

      {/* Search and filters section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Search */}
        <div className="relative md:col-span-5">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 sm:text-sm focus:outline-none focus:border-2 focus:border-blue-600"
            placeholder="Search by order ID, customer, product..."
          />
        </div>

        {/* Status filter */}
        <div className="relative md:col-span-3">
          <select className="block w-full pl-3 pr-10 py-2.5 text-gray-700 border border-gray-200 sm:text-sm rounded-lg bg-gray-50 appearance-none focus:outline-none focus:border-2 focus:border-blue-600">
            <option value="">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="In Production">In Production</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        {/* Filter button */}
        <div className="relative md:col-span-2">
          <button className="flex w-full justify-center items-center px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-2 focus:border-blue-600">
            <FaFilter className="mr-2 text-gray-500" />
            Filter
          </button>
        </div>

        {/* Sort button */}
        <div className="relative md:col-span-2">
          <button className="flex w-full justify-center items-center px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-2 focus:border-blue-600">
            <FaSort className="mr-2 text-gray-500" />
            Sort By
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModernOrdersHeader;