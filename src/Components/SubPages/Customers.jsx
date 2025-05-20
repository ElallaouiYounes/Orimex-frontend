import React, { useState } from "react";
import { FaEye, FaClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import ModernCustomersHeader from "../Tools/customers/ModernCustomersHeader";
import CustomersMetricsSummary from "../Tools/customers/CustomersMetricsSummary";
import CustomerLocationChart from "../Tools/customers/CustomerLocationChart";
import CustomerActivityChart from "../Tools/customers/CustomerActivityChart";
import Pagination from "../Global/Pagination";

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fakeCustomers = [
    {
      customerId: "CUST-2024-001",
      name: "Casablanca Tower Contractors",
      contactPerson: "Ahmed Benali",
      email: "ahmed.benali@casatower.com",
      phone: "+212 600 123 456",
      companyType: "Construction",
      location: "Casablanca",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 15,
      lastOrderDate: "2024-05-15",
      totalSpent: "245,000 MAD",
    },
    {
      customerId: "CUST-2024-002",
      name: "Marrakech Glass Solutions",
      contactPerson: "Fatima Zahra",
      email: "fzahra@marrakechglass.ma",
      phone: "+212 700 234 567",
      companyType: "Glass Supplier",
      location: "Marrakech",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 8,
      lastOrderDate: "2024-05-18",
      totalSpent: "120,500 MAD",
    },
    {
      customerId: "CUST-2024-003",
      name: "Rabat Architectural Glass",
      contactPerson: "Karim El Mansouri",
      email: "k.mansouri@raglass.com",
      phone: "+212 650 345 678",
      companyType: "Architecture Firm",
      location: "Rabat",
      status: {
        name: "Pending Approval",
        icon: FaClock,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
      orders: 0,
      lastOrderDate: "N/A",
      totalSpent: "0 MAD",
    },
    {
      customerId: "CUST-2024-004",
      name: "Tangier Mirror Works",
      contactPerson: "Youssef Amrani",
      email: "y.amrani@tangmirror.com",
      phone: "+212 610 456 789",
      companyType: "Manufacturer",
      location: "Tangier",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 22,
      lastOrderDate: "2024-05-22",
      totalSpent: "387,200 MAD",
    },
    {
      customerId: "CUST-2024-005",
      name: "Fes Polycarbonate Ltd",
      contactPerson: "Leila Berrada",
      email: "l.berrada@fespoly.com",
      phone: "+212 660 567 890",
      companyType: "Distributor",
      location: "Fes",
      status: {
        name: "Inactive",
        icon: FaTimesCircle,
        color: "text-red-500",
        bg: "bg-red-100",
      },
      orders: 3,
      lastOrderDate: "2024-03-10",
      totalSpent: "45,000 MAD",
    },
    {
      customerId: "CUST-2024-006",
      name: "Oujda Glass Distributors",
      contactPerson: "Hassan Chraibi",
      email: "h.chraibi@oujdaglass.ma",
      phone: "+212 670 678 901",
      companyType: "Wholesaler",
      location: "Oujda",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 12,
      lastOrderDate: "2024-05-05",
      totalSpent: "178,750 MAD",
    },
    {
      customerId: "CUST-2024-007",
      name: "Agadir Aluminum Systems",
      contactPerson: "Nadia El Fassi",
      email: "nadia.elfassi@agadiral.com",
      phone: "+212 680 789 012",
      companyType: "Construction",
      location: "Agadir",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 18,
      lastOrderDate: "2024-05-25",
      totalSpent: "312,400 MAD",
    },
    {
      customerId: "CUST-2024-008",
      name: "Meknes Glass Innovations",
      contactPerson: "Omar Touimi",
      email: "o.touimi@meknesglass.com",
      phone: "+212 690 890 123",
      companyType: "Glass Fabricator",
      location: "Meknes",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 9,
      lastOrderDate: "2024-05-28",
      totalSpent: "156,800 MAD",
    },
    {
      customerId: "CUST-2024-009",
      name: "Kenitra Window Solutions",
      contactPerson: "Samira Belhaj",
      email: "s.belhaj@kenitrawindows.com",
      phone: "+212 700 901 234",
      companyType: "Window Installer",
      location: "Kenitra",
      status: {
        name: "Pending Approval",
        icon: FaClock,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
      orders: 0,
      lastOrderDate: "N/A",
      totalSpent: "0 MAD",
    },
    {
      customerId: "CUST-2024-010",
      name: "El Jadida Mirror Art",
      contactPerson: "Khalid Bennis",
      email: "k.bennis@jadidamirror.com",
      phone: "+212 710 012 345",
      companyType: "Artisan",
      location: "El Jadida",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 5,
      lastOrderDate: "2024-06-02",
      totalSpent: "89,300 MAD",
    },
  ];

  // Define table headers
  const tableHeaders = [
    "CUSTOMER ID",
    "NAME",
    "CONTACT PERSON",
    "EMAIL",
    "PHONE",
    "COMPANY TYPE",
    "LOCATION",
    "STATUS",
    "ORDERS",
    "LAST ORDER",
    "TOTAL SPENT",
    "ACTIONS",
  ];

  return (
    <div className="w-full h-[calc(100vh-180px)] overflow-y-auto pb-6">
      {/* page header */}
      <ModernCustomersHeader />

      {/* table container */}
      <div className="w-full overflow-x-auto border rounded-sm">
        <table className="min-w-full border-collapse table-auto">
          <thead>
            <tr className="text-xs font-medium font-inter text-black/70 h-10 tracking-wider bg-gray-200/25">
              {tableHeaders.map((header, index) => (
                <th 
                  key={index} 
                  className="px-6 h-full hover:bg-gray-200/40 text-left font-medium whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fakeCustomers.map((customer, index) => (
              <tr 
                key={index} 
                className="text-xs font-normal text-gray-600 h-10 border-t"
              >
                <td className="px-6 h-full whitespace-nowrap text-blue-600">
                  {customer.customerId}
                </td>
                <td className="px-6 h-full whitespace-nowrap">
                  {customer.name}
                </td>
                <td className="px-6 h-full whitespace-nowrap">
                  {customer.contactPerson}
                </td>
                <td className="px-6 h-full whitespace-nowrap">
                  {customer.email}
                </td>
                <td className="px-6 h-full whitespace-nowrap">
                  {customer.phone}
                </td>
                <td className="px-6 h-full whitespace-nowrap">
                  {customer.companyType}
                </td>
                <td className="px-6 h-full whitespace-nowrap">
                  {customer.location}
                </td>
                <td className="px-6 h-full whitespace-nowrap">
                  <div
                    className={`flex items-center px-2 py-1 gap-1 rounded-xl ${customer.status.color} ${customer.status.bg}`}
                  >
                    <customer.status.icon />
                    {customer.status.name}
                  </div>
                </td>
                <td className="px-6 h-full whitespace-nowrap">
                  {customer.orders}
                </td>
                <td className="px-6 h-full whitespace-nowrap">
                  {customer.lastOrderDate}
                </td>
                <td className="px-6 h-full whitespace-nowrap">
                  {customer.totalSpent}
                </td>
                <td className="px-6 h-full whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <FaEye className="cursor-pointer text-amber-500" />
                    <LuPencilLine className="cursor-pointer text-green-500" />
                    <MdDelete className="cursor-pointer text-red-500" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={fakeCustomers.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* Analytics Dashboard */}
      <div className="mt-6">
        <CustomersMetricsSummary customers={fakeCustomers} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CustomerLocationChart customers={fakeCustomers} />
          <CustomerActivityChart customers={fakeCustomers} />
        </div>
      </div>
    </div>
  );
};

export default Customers;