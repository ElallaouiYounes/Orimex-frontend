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
      <div className="w-full overflow-x-auto border rounded-sm">
        <table className="min-w-full divide-y divide-gray-200">
          {/* table header */}
          <thead className="bg-gray-200/25">
            <tr className="text-xs font-medium font-inter text-black/70 h-10 tracking-wider">
              <th className="px-6 py-3 text-left whitespace-nowrap">DELIVERY ID</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">ORDER ID</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">CUSTOMER</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">DRIVER</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">VEHICLE</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">START DATE</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">EST. ARRIVAL</th>
              <th className="px-6 py-3 text-left min-w-[300px]">ROUTE</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">STATUS</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">CONTACT</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {fakeDeliveries.map((item, rowIndex) => (
              <tr key={rowIndex} className="text-xs font-normal text-gray-600 h-20">
                <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                  {item.deliveryId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.orderId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.customerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.driver}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.vehicle}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.startDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.estimatedArrival}
                </td>
                <td className="px-6 py-4 min-w-[500px]">
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
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    className={`flex items-center px-2 py-1 gap-1 rounded-xl ${item.status.color} ${item.status.bg}`}
                  >
                    <item.status.icon />
                    {item.status.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.contact}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
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

export default Delivery;