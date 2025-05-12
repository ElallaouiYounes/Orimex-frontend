import React, { useState, useEffect } from "react";
import {
  FaCheck,
  FaUserSlash,
  FaBan
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { closePoop } from "../../../Store/Reducers/navSlice";

const UpdateCustomer = ({ customerData }) => {
  const dispatch = useDispatch();
  
  // Form state
  const [customerId, setCustomerId] = useState('');
  const [name, setName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('Active');
  const [loading, setLoading] = useState(true);

  const statusOptions = [
    {
      name: "Active",
      icon: FaCheck,
      color: "text-green-600",
      bg: "bg-green-50",
      borderColor: "border-green-200",
      hoverBg: "hover:bg-green-100",
    },
    {
      name: "Inactive",
      icon: FaUserSlash,
      color: "text-amber-600",
      bg: "bg-amber-50",
      borderColor: "border-amber-200",
      hoverBg: "hover:bg-amber-100",
    },
    {
      name: "Banned",
      icon: FaBan,
      color: "text-red-600",
      bg: "bg-red-50",
      borderColor: "border-red-200",
      hoverBg: "hover:bg-red-100",
    },
  ];

  // Load customer data on component mount
  useEffect(() => {
    if (customerData) {
      setCustomerId(customerData.customer_id || '');
      setName(customerData.name || '');
      setContactPerson(customerData.contact_person || '');
      setEmail(customerData.email || '');
      setPhone(customerData.phone || '');
      setCompanyType(customerData.company_type || '');
      setLocation(customerData.location || '');
      setStatus(customerData.status || 'Active');
      setLoading(false);
    } else {
      console.error("No customer data provided for update");
      setLoading(false);
    }
  }, [customerData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedData = {
      customer_id: customerId,
      name: name,
      contact_person: contactPerson,
      email: email,
      phone: phone,
      company_type: companyType,
      location: location,
      status: status
    };

    console.log("Customer updated:", updatedData);
    // Here you would typically call an API to update the customer
    // updateCustomer(updatedData).then(() => dispatch(closePoop()));
    
    dispatch(closePoop());
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="h-full p-5 overflow-y-auto bg-white">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Update Customer</h2>
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
        {/* Customer ID */}
        <div className="relative">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            CUSTOMER ID
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-100"
            placeholder="CUST-123"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            readOnly // Customer ID typically shouldn't be changed after creation
          />
        </div>
        
        {/* Name and Contact Person */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              NAME
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Company Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              CONTACT PERSON
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="John Doe"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
            />
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              EMAIL
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="contact@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              PHONE
            </label>
            <input
              type="tel"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="+1 (123) 456-7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        
        {/* Company Type and Location */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              COMPANY TYPE
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="contact@company.com"
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
            />
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              LOCATION
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="City, Country"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
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
            Update Customer
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCustomer;