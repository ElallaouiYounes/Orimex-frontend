import React, { useState } from "react";
import {
  FaEye,
  FaClock,
  FaCheckCircle,
  FaBoxOpen,
  FaTimesCircle,
} from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCogs } from "react-icons/fa";
import ModernOrdersHeader from "../Tools/orders/ModernOrdersHeader";
import MetricsSummary from "../Tools/orders/MetricsSummary";
import OrderStatusChart from "../Tools/orders/OrderStatusChart";
import MonthlyOrdersChart from "../Tools/orders/MonthlyOrdersChart";
import Pagination from "../Global/Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const fakeOrders = [
    {
      orderId: "LNIV-2025-001",
      customerName: "Casablanca Tower Contractors",
      orderDate: "2025-05-15",
      expectedDelivery: "2025-07-10",
      status: {
        name: "In Production",
        icon: FaCogs,
        color: "text-purple-500",
        bg: "bg-purple-100",
      },
      productId: "PC-1220",
      productName: "Polycarbonate Sheet (10mm, Clear)",
      quantity: "150 sheets",
      dimensions: "1200x2400mm",
      thickness: "10mm",
      color: "Clear",
    },
    {
      orderId: "LNIV-2025-002",
      customerName: "Marrakech Glass Solutions",
      orderDate: "2025-05-18",
      expectedDelivery: "2025-06-25",
      status: {
        name: "Shipped",
        icon: TbTruckDelivery,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      productId: "ALB-4550",
      productName: "Alubond Fireproof Panel (4mm)",
      quantity: "80 panel",
      dimensions: "1220x2440mm",
      thickness: "4mm",
      color: "Brushed Aluminum",
    },
    {
      orderId: "LNIV-2025-003",
      customerName: "Rabat Architectural Glass",
      orderDate: "2025-05-20",
      expectedDelivery: "2025-06-15",
      status: {
        name: "Pending",
        icon: FaClock,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
      productId: "GL-8800",
      productName: "Laminated Safety Glass (8mm)",
      quantity: "200 sqm",
      dimensions: "Custom sizes",
      thickness: "8mm",
      color: "Bronze Tinted",
    },
    {
      orderId: "LNIV-2025-004",
      customerName: "Tangier Mirror Works",
      orderDate: "2025-05-22",
      expectedDelivery: "2025-06-30",
      status: {
        name: "Confirmed",
        icon: FaCheckCircle,
        color: "text-blue-500",
        bg: "bg-blue-100",
      },
      productId: "MR-6550",
      productName: "Silver Mirror (6mm)",
      quantity: "50 pieces",
      dimensions: "1500x3000mm",
      thickness: "6mm",
      color: "Silver",
    },
    {
      orderId: "LNIV-2025-005",
      customerName: "Fes Polycarbonate Ltd",
      orderDate: "2025-05-10",
      expectedDelivery: "2025-05-30",
      status: {
        name: "Delivered",
        icon: FaBoxOpen,
        color: "text-teal-500",
        bg: "bg-teal-100",
      },
      productId: "PC-5500",
      productName: "Multiwall Polycarbonate (5mm)",
      quantity: "300 sqm",
      dimensions: "2100x6000mm",
      thickness: "5mm",
      color: "Opal",
    },
    {
      orderId: "LNIV-2025-006",
      customerName: "Oujda Glass Distributors",
      orderDate: "2025-05-05",
      expectedDelivery: "2025-06-10",
      status: {
        name: "Cancelled",
        icon: FaTimesCircle,
        color: "text-red-500",
        bg: "bg-red-100",
      },
      productId: "TG-1212",
      productName: "Tempered Glass (12mm)",
      quantity: "120 sheets",
      dimensions: "1000x2000mm",
      thickness: "12mm",
      color: "Clear",
      cancellationReason: "Client request",
    },
    {
      orderId: "LNIV-2025-007",
      customerName: "Agadir Aluminum Systems",
      orderDate: "2025-05-25",
      expectedDelivery: "2025-07-15",
      status: {
        name: "In Production",
        icon: FaCogs,
        color: "text-purple-500",
        bg: "bg-purple-100",
      },
      productId: "ALU-7700",
      productName: "Aluminum Composite Panel (3mm)",
      quantity: "95 panels",
      dimensions: "1250x2500mm",
      thickness: "3mm",
      color: "Pearl White",
    },
    {
      orderId: "LNIV-2025-008",
      customerName: "Meknes Glass Innovations",
      orderDate: "2025-05-28",
      expectedDelivery: "2025-06-20",
      status: {
        name: "Confirmed",
        icon: FaCheckCircle,
        color: "text-blue-500",
        bg: "bg-blue-100",
      },
      productId: "DGL-3300",
      productName: "Decorative Glass (6mm)",
      quantity: "65 sqm",
      dimensions: "Custom sizes",
      thickness: "6mm",
      color: "Frosted",
    },
    {
      orderId: "LNIV-2025-009",
      customerName: "Kenitra Window Solutions",
      orderDate: "2025-05-30",
      expectedDelivery: "2025-07-05",
      status: {
        name: "Pending",
        icon: FaClock,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
      productId: "TGL-8800",
      productName: "Toughened Glass (10mm)",
      quantity: "180 sheets",
      dimensions: "900x2100mm",
      thickness: "10mm",
      color: "Blue Tinted",
    },
    {
      orderId: "LNIV-2025-010",
      customerName: "El Jadida Mirror Art",
      orderDate: "2025-06-02",
      expectedDelivery: "2025-07-25",
      status: {
        name: "Shipped",
        icon: TbTruckDelivery,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      productId: "AMR-2200",
      productName: "Antique Mirror (5mm)",
      quantity: "40 pieces",
      dimensions: "1200x2400mm",
      thickness: "5mm",
      color: "Antique Silver",
    },
  ];

  return (
    <div className="w-full h-[calc(100vh-180px)] overflow-y-auto pb-6">
      {/* page header */}
      <ModernOrdersHeader />

      {/* table container */}
      <div className="w-full overflow-x-auto whitespace-nowrap border rounded-sm">
        {/* table */}
        <div className="inline-block min-w-full">
          {/* table header */}
          <div className="flex text-xs font-medium font-inter h-10 tracking-wider bg-gray-200/25">
            {[
              "ORDER ID",
              "CUSTOMER NAME",
              "ORDER DATE",
              "EXPECTED DELIVERY",
              "STATUS",
              "PRODUCT ID",
              "PRODUCT NAME",
              "QUANTITY",
              "DIMENSIONS",
              "THICKNESS",
              "COLOR",
              "ACTIONS",
            ].map((header, index) => (
              <div
                key={index}
                className="px-6 h-full hover:bg-gray-200/40 flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth(header, fakeOrders, index)}px`,
                }}
              >
                {header}
              </div>
            ))}
          </div>

          {/* table content */}
          {fakeOrders.map((item, rowIndex) => (
            <div
              key={rowIndex}
              className="flex text-xs font-normal text-gray-600 h-10 border-t"
            >
              <div
                className="px-6 h-full flex items-center text-blue-600 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("ORDER ID", fakeOrders, 0)}px`,
                }}
              >
                {item.orderId}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("CUSTOMER NAME", fakeOrders, 1)}px`,
                }}
              >
                {item.customerName}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("ORDER DATE", fakeOrders, 2)}px`,
                }}
              >
                {item.orderDate}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth(
                    "EXPECTED DELIVERY",
                    fakeOrders,
                    3
                  )}px`,
                }}
              >
                {item.expectedDelivery}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("STATUS", fakeOrders, 4)}px`,
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
                  width: `${getColumnWidth("PRODUCT ID", fakeOrders, 5)}px`,
                }}
              >
                {item.productId}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("PRODUCT NAME", fakeOrders, 6)}px`,
                }}
              >
                {item.productName}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("QUANTITY", fakeOrders, 7)}px`,
                }}
              >
                {item.quantity}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("DIMENSIONS", fakeOrders, 8)}px`,
                }}
              >
                {item.dimensions}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("THICKNESS", fakeOrders, 9)}px`,
                }}
              >
                {item.thickness}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("COLOR", fakeOrders, 10)}px`,
                }}
              >
                {item.color}
              </div>
              <div
                className="px-6 h-full flex items-center gap-3 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("ACTIONS", fakeOrders, 11)}px`,
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
        totalItems={fakeOrders.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* Analytics Dashboard */}
      <div className="mt-6">
        <MetricsSummary orders={fakeOrders} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <OrderStatusChart orders={fakeOrders} />
          <MonthlyOrdersChart orders={fakeOrders} />
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
        content = item.orderId;
        break;
      case 1:
        content = item.customerName;
        break;
      case 2:
        content = item.orderDate;
        break;
      case 3:
        content = item.expectedDelivery;
        break;
      case 4:
        content = item.status.name;
        break;
      case 5:
        content = item.productId;
        break;
      case 6:
        content = item.productName;
        break;
      case 7:
        content = item.quantity;
        break;
      case 8:
        content = item.dimensions;
        break;
      case 9:
        content = item.thickness;
        break;
      case 10:
        content = item.color;
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

export default Orders;
