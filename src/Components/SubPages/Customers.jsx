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

  return (
    <div className="w-full h-[calc(100vh-180px)] overflow-y-auto pb-6">
      {/* page header */}
      <ModernCustomersHeader />

      {/* table container */}
      <div className="w-full overflow-x-auto whitespace-nowrap border rounded-sm">
        {/* table */}
        <div className="inline-block min-w-full">
          {/* table header */}
          <div className="flex text-xs font-medium font-inter h-10 tracking-wider bg-gray-200/25">
            {[
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
            ].map((header, index) => (
              <div
                key={index}
                className="px-6 h-full hover:bg-gray-200/40 flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth(header, fakeCustomers, index)}px`,
                }}
              >
                {header}
              </div>
            ))}
          </div>

          {/* table content */}
          {fakeCustomers.map((item, rowIndex) => (
            <div
              key={rowIndex}
              className="flex text-xs font-normal text-gray-600 h-10 border-t"
            >
              <div
                className="px-6 h-full flex items-center text-blue-600 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("CUSTOMER ID", fakeCustomers, 0)}px`,
                }}
              >
                {item.customerId}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("NAME", fakeCustomers, 1)}px`,
                }}
              >
                {item.name}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth(
                    "CONTACT PERSON",
                    fakeCustomers,
                    2
                  )}px`,
                }}
              >
                {item.contactPerson}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("EMAIL", fakeCustomers, 3)}px`,
                }}
              >
                {item.email}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("PHONE", fakeCustomers, 4)}px`,
                }}
              >
                {item.phone}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth(
                    "COMPANY TYPE",
                    fakeCustomers,
                    5
                  )}px`,
                }}
              >
                {item.companyType}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("LOCATION", fakeCustomers, 6)}px`,
                }}
              >
                {item.location}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("STATUS", fakeCustomers, 7)}px`,
                }}
              >
                <div
                  className={`flex items-center px-2 py-1 gap-1 rounded-xl ${item.status.color} ${item.status.bg}`}
                >
                  <item.status.icon />
                  {item.status.name}
                </div>
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("ORDERS", fakeCustomers, 8)}px`,
                }}
              >
                {item.orders}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("LAST ORDER", fakeCustomers, 9)}px`,
                }}
              >
                {item.lastOrderDate}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth(
                    "TOTAL SPENT",
                    fakeCustomers,
                    10
                  )}px`,
                }}
              >
                {item.totalSpent}
              </div>
              <div
                className="px-6 h-full flex items-center gap-3 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("ACTIONS", fakeCustomers, 11)}px`,
                }}
              >
                <FaEye className="cursor-pointer text-amber-500" />
                <LuPencilLine className="cursor-pointer text-green-500" />
                <MdDelete className="cursor-pointer text-red-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ---------- */}

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

// Helper function to calculate column width based on content
function getColumnWidth(header, data, columnIndex) {
  // Base width for the header text
  const headerWidth = header.length * 8 + 32; // 8px per character + padding

  // Find the widest content in this column
  let maxContentWidth = 0;
  data.forEach((item) => {
    let content = "";
    switch (columnIndex) {
      case 0:
        content = item.customerId;
        break;
      case 1:
        content = item.name;
        break;
      case 2:
        content = item.contactPerson;
        break;
      case 3:
        content = item.email;
        break;
      case 4:
        content = item.phone;
        break;
      case 5:
        content = item.companyType;
        break;
      case 6:
        content = item.location;
        break;
      case 7:
        content = item.status.name;
        break;
      case 8:
        content = item.orders;
        break;
      case 9:
        content = item.lastOrderDate;
        break;
      case 10:
        content = item.totalSpent;
        break;
      case 11:
        content = "Actions";
        break;
    }

    const contentWidth = content.toString().length * 8 + 32;
    if (contentWidth > maxContentWidth) maxContentWidth = contentWidth;
  });

  // Return the larger of header width or max content width
  return Math.max(headerWidth, maxContentWidth, 120); // Minimum width of 120px
}

export default Customers;
