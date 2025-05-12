import React, { useState } from "react";
import {
  FaTruck,
  FaMapMarkerAlt,
  FaRoute,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaEye,
} from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import ModernDeliveriesHeader from "../Tools/delivery/ModernDeliveriesHeader";
import DeliveriesMetricsSummary from "../Tools/delivery/DeliveriesMetricsSummary";
import DeliveryStatusChart from "../Tools/delivery/DeliveryStatusChart";
import DeliveryRouteMap from "../Tools/delivery/DeliveryRouteMap";
import Pagination from "../Global/Pagination";

const Delivery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fakeDeliveries = [
    {
      deliveryId: "DLV-2024-001",
      orderId: "LNIV-2024-001",
      customerName: "Casablanca Tower Contractors",
      driver: "Mohammed Amrani",
      vehicle: "Truck #C-2456",
      startDate: "2024-05-16",
      estimatedArrival: "2024-05-17",
      status: {
        name: "In Transit",
        icon: FaTruck,
        color: "text-blue-500",
        bg: "bg-blue-100",
      },
      route: {
        from: "Casablanca Warehouse",
        current: "Settat",
        to: "Casablanca Tower Site",
        progress: 65,
      },
      contact: "+212 600 123 456",
    },
    {
      deliveryId: "DLV-2024-002",
      orderId: "LNIV-2024-002",
      customerName: "Marrakech Glass Solutions",
      driver: "Hassan El Mansouri",
      vehicle: "Van #M-7890",
      startDate: "2024-05-18",
      estimatedArrival: "2024-05-18",
      status: {
        name: "Delivered",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      route: {
        from: "Casablanca Warehouse",
        current: "Marrakech Showroom",
        to: "Marrakech Showroom",
        progress: 100,
      },
      contact: "+212 700 234 567",
    },
    {
      deliveryId: "DLV-2024-003",
      orderId: "LNIV-2024-003",
      customerName: "Rabat Architectural Glass",
      driver: "Karim Belhaj",
      vehicle: "Truck #R-3456",
      startDate: "2024-05-20",
      estimatedArrival: "2024-05-21",
      status: {
        name: "Scheduled",
        icon: FaClock,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
      route: {
        from: "Casablanca Warehouse",
        current: "Casablanca Warehouse",
        to: "Rabat Construction Site",
        progress: 0,
      },
      contact: "+212 650 345 678",
    },
    {
      deliveryId: "DLV-2024-004",
      orderId: "LNIV-2024-004",
      customerName: "Tangier Mirror Works",
      driver: "Youssef Bennis",
      vehicle: "Truck #T-4567",
      startDate: "2024-05-22",
      estimatedArrival: "2024-05-23",
      status: {
        name: "In Transit",
        icon: FaTruck,
        color: "text-blue-500",
        bg: "bg-blue-100",
      },
      route: {
        from: "Casablanca Warehouse",
        current: "Kenitra",
        to: "Tangier Factory",
        progress: 40,
      },
      contact: "+212 610 456 789",
    },
    {
      deliveryId: "DLV-2024-005",
      orderId: "LNIV-2024-005",
      customerName: "Fes Polycarbonate Ltd",
      driver: "Ahmed Zahra",
      vehicle: "Van #F-5678",
      startDate: "2024-05-10",
      estimatedArrival: "2024-05-11",
      status: {
        name: "Delivered",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      route: {
        from: "Casablanca Warehouse",
        current: "Fes Office",
        to: "Fes Office",
        progress: 100,
      },
      contact: "+212 660 567 890",
    },
    {
      deliveryId: "DLV-2024-006",
      orderId: "LNIV-2024-006",
      customerName: "Oujda Glass Distributors",
      driver: "Samira Chraibi",
      vehicle: "Truck #O-6789",
      startDate: "2024-05-15",
      estimatedArrival: "2024-05-16",
      status: {
        name: "Delayed",
        icon: FaTimesCircle,
        color: "text-red-500",
        bg: "bg-red-100",
      },
      route: {
        from: "Casablanca Warehouse",
        current: "Taourirt",
        to: "Oujda Warehouse",
        progress: 75,
      },
      contact: "+212 670 678 901",
    },
    {
      deliveryId: "DLV-2024-007",
      orderId: "LNIV-2024-007",
      customerName: "Agadir Aluminum Systems",
      driver: "Nadia Touimi",
      vehicle: "Truck #A-7890",
      startDate: "2024-05-25",
      estimatedArrival: "2024-05-27",
      status: {
        name: "In Transit",
        icon: FaTruck,
        color: "text-blue-500",
        bg: "bg-blue-100",
      },
      route: {
        from: "Casablanca Warehouse",
        current: "Safi",
        to: "Agadir Construction Site",
        progress: 30,
      },
      contact: "+212 680 789 012",
    },
    {
      deliveryId: "DLV-2024-008",
      orderId: "LNIV-2024-008",
      customerName: "Meknes Glass Innovations",
      driver: "Omar El Fassi",
      vehicle: "Van #M-8901",
      startDate: "2024-05-28",
      estimatedArrival: "2024-05-28",
      status: {
        name: "Out for Delivery",
        icon: FaTruck,
        color: "text-purple-500",
        bg: "bg-purple-100",
      },
      route: {
        from: "Casablanca Warehouse",
        current: "Meknes City Center",
        to: "Meknes Glass Workshop",
        progress: 85,
      },
      contact: "+212 690 890 123",
    },
    {
      deliveryId: "DLV-2024-009",
      orderId: "LNIV-2024-009",
      customerName: "Kenitra Window Solutions",
      driver: "Leila Amrani",
      vehicle: "Van #K-9012",
      startDate: "2024-05-30",
      estimatedArrival: "2024-05-30",
      status: {
        name: "Scheduled",
        icon: FaClock,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
      route: {
        from: "Casablanca Warehouse",
        current: "Casablanca Warehouse",
        to: "Kenitra Showroom",
        progress: 0,
      },
      contact: "+212 700 901 234",
    },
    {
      deliveryId: "DLV-2024-010",
      orderId: "LNIV-2024-010",
      customerName: "El Jadida Mirror Art",
      driver: "Khalid Berrada",
      vehicle: "Truck #E-0123",
      startDate: "2024-06-02",
      estimatedArrival: "2024-06-02",
      status: {
        name: "Out for Delivery",
        icon: FaTruck,
        color: "text-purple-500",
        bg: "bg-purple-100",
      },
      route: {
        from: "Casablanca Warehouse",
        current: "El Jadida Outskirts",
        to: "El Jadida Art Studio",
        progress: 90,
      },
      contact: "+212 710 012 345",
    },
  ];

  return (
    <div className="w-full h-[calc(100vh-180px)] overflow-y-auto pb-6">
      {/* page header */}
      <ModernDeliveriesHeader />

      {/* table container */}
      <div className="w-full overflow-x-auto whitespace-nowrap border rounded-sm">
        {/* table */}
        <div className="inline-block min-w-full">
          {/* table header */}
          <div className="flex text-xs font-medium font-inter h-10 tracking-wider bg-gray-200/25">
            {[
              "DELIVERY ID",
              "ORDER ID",
              "CUSTOMER",
              "DRIVER",
              "VEHICLE",
              "START DATE",
              "EST. ARRIVAL",
              "ROUTE",
              "STATUS",
              "CONTACT",
              "ACTIONS",
            ].map((header, index) => (
              <div
                key={index}
                className="px-6 h-full hover:bg-gray-200/40 flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth(header, fakeDeliveries, index)}px`,
                }}
              >
                {header}
              </div>
            ))}
          </div>

          {/* table content */}
          {fakeDeliveries.map((item, rowIndex) => (
            <div
              key={rowIndex}
              className="flex text-xs font-normal text-gray-600 h-20 border-t"
            >
              <div
                className="px-6 h-full flex items-center text-blue-600 flex-shrink-0"
                style={{
                  width: `${getColumnWidth(
                    "DELIVERY ID",
                    fakeDeliveries,
                    0
                  )}px`,
                }}
              >
                {item.deliveryId}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("ORDER ID", fakeDeliveries, 1)}px`,
                }}
              >
                {item.orderId}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("CUSTOMER", fakeDeliveries, 2)}px`,
                }}
              >
                {item.customerName}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("DRIVER", fakeDeliveries, 3)}px`,
                }}
              >
                {item.driver}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("VEHICLE", fakeDeliveries, 4)}px`,
                }}
              >
                {item.vehicle}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("START DATE", fakeDeliveries, 5)}px`,
                }}
              >
                {item.startDate}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth(
                    "EST. ARRIVAL",
                    fakeDeliveries,
                    6
                  )}px`,
                }}
              >
                {item.estimatedArrival}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("ROUTE", fakeDeliveries, 7)}px`,
                }}
              >
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-1 text-xs">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span className="font-medium">From:</span> {item.route.from}
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <FaRoute className="text-blue-500" />
                    <span className="font-medium">Current:</span>{" "}
                    {item.route.current}
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <FaMapMarkerAlt className="text-green-500" />
                    <span className="font-medium">To:</span> {item.route.to}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: `${item.route.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("STATUS", fakeDeliveries, 8)}px`,
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
                  width: `${getColumnWidth("CONTACT", fakeDeliveries, 9)}px`,
                }}
              >
                {item.contact}
              </div>
              <div
                className="px-6 h-full flex items-center gap-3 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("ACTIONS", fakeDeliveries, 10)}px`,
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
        totalItems={fakeDeliveries.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* Analytics Dashboard */}
      <div className="mt-6">
        <DeliveriesMetricsSummary deliveries={fakeDeliveries} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DeliveryStatusChart deliveries={fakeDeliveries} />
          <DeliveryRouteMap deliveries={fakeDeliveries} />
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
        content = item.deliveryId;
        break;
      case 1:
        content = item.orderId;
        break;
      case 2:
        content = item.customerName;
        break;
      case 3:
        content = item.driver;
        break;
      case 4:
        content = item.vehicle;
        break;
      case 5:
        content = item.startDate;
        break;
      case 6:
        content = item.estimatedArrival;
        break;
      case 7:
        content =
          "From: " +
          item.route.from +
          " Current: " +
          item.route.current +
          " To: " +
          item.route.to;
        break;
      case 8:
        content = item.status.name;
        break;
      case 9:
        content = item.contact;
        break;
      case 10:
        content = "Actions";
        break;
    }

    const contentWidth = content.toString().length * 8 + 32;
    if (contentWidth > maxContentWidth) maxContentWidth = contentWidth;
  });

  // Return the larger of header width or max content width
  return Math.max(headerWidth, maxContentWidth, 120); // Minimum width of 120px
}

export default Delivery;
