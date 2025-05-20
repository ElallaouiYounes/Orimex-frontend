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
      orderDate: "2025-07-18",
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
      <div className="w-full overflow-x-auto border rounded-sm">
        <table className="min-w-full divide-y divide-gray-200">
          {/* table header */}
          <thead className="bg-gray-200/25">
            <tr className="text-xs font-medium font-inter text-black/70 h-10 tracking-wider">
              <th className="px-6 py-3 text-left whitespace-nowrap">ORDER ID</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">CUSTOMER NAME</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">ORDER DATE</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">EXPECTED DELIVERY</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">STATUS</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">PRODUCT ID</th>
              <th className="px-6 py-3 text-left min-w-[200px]">PRODUCT NAME</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">QUANTITY</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">DIMENSIONS</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">THICKNESS</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">COLOR</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {fakeOrders.map((item, rowIndex) => (
              <tr key={rowIndex} className="text-xs font-normal text-gray-600 h-10">
                <td className="px-6 py-3 whitespace-nowrap text-blue-600">
                  {item.orderId}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {item.customerName}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {item.orderDate}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {item.expectedDelivery}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <div
                    className={`flex items-center px-2 py-1 gap-1 rounded-xl ${item.status.color} ${item.status.bg}`}
                  >
                    <item.status.icon />
                    {item.status.name}
                  </div>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {item.productId}
                </td>
                <td className="px-6 py-3 min-w-[200px]">
                  {item.productName}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {item.quantity}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {item.dimensions}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {item.thickness}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {item.color}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
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

export default Orders;