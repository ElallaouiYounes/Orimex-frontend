import React, { useState } from "react";
import {
  FaTruck,
  FaWarehouse,
  FaMapMarkedAlt,
  FaShippingFast,
  FaBoxes,
  FaTools,
} from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import ModernLogisticsHeader from "../Tools/logistics/ModernLogisticsHeader";
import LogisticsMetricsSummary from "../Tools/logistics/LogisticsMetricsSummary";
import FleetStatusChart from "../Tools/logistics/FleetStatusChart";
import WarehouseCapacityChart from "../Tools/logistics/WarehouseCapacityChart";
import Pagination from "../Global/Pagination";

const Logistics = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
  const fleetData = [
    {
      vehicleId: "TRK-2024-001",
      licensePlate: "C-2456",
      type: "Heavy Truck",
      capacity: "10,000 kg",
      currentLocation: "Casablanca Warehouse",
      status: {
        name: "In Transit",
        icon: FaTruck,
        color: "text-blue-500",
        bg: "bg-blue-100",
      },
      driver: "Mohammed Amrani",
      lastMaintenance: "2024-04-15",
      nextMaintenance: "2024-07-15",
      model: 2022,
    },
    {
      vehicleId: "VAN-2024-002",
      licensePlate: "M-7890",
      type: "Delivery Van",
      capacity: "2,500 kg",
      currentLocation: "Marrakech Showroom",
      status: {
        name: "Available",
        icon: FaShippingFast,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      driver: "Hassan El Mansouri",
      lastMaintenance: "2024-05-10",
      nextMaintenance: "2024-08-10",
      model: 2025,
    },
    {
      vehicleId: "TRK-2024-003",
      licensePlate: "R-3456",
      type: "Refrigerated Truck",
      capacity: "8,000 kg",
      currentLocation: "Rabat Construction Site",
      status: {
        name: "On Delivery",
        icon: FaTruck,
        color: "text-purple-500",
        bg: "bg-purple-100",
      },
      driver: "Karim Belhaj",
      lastMaintenance: "2024-03-20",
      nextMaintenance: "2024-06-20",
      model: 2016,
    },
    {
      vehicleId: "TRK-2024-004",
      licensePlate: "T-4567",
      type: "Flatbed Truck",
      capacity: "12,000 kg",
      currentLocation: "Kenitra",
      status: {
        name: "In Transit",
        icon: FaTruck,
        color: "text-blue-500",
        bg: "bg-blue-100",
      },
      driver: "Youssef Bennis",
      lastMaintenance: "2024-05-05",
      nextMaintenance: "2024-08-05",
      model: 2020,
    },
    {
      vehicleId: "VAN-2024-005",
      licensePlate: "F-5678",
      type: "Cargo Van",
      capacity: "3,000 kg",
      currentLocation: "Fes Office",
      status: {
        name: "Maintenance",
        icon: FaTools,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
      driver: "Ahmed Zahra",
      lastMaintenance: "2024-05-20",
      nextMaintenance: "2024-05-27",
      model: 2018,
    },
  ];

  const warehouses = [
    {
      warehouseId: "WH-001",
      name: "Casablanca Main",
      location: "Casablanca",
      capacity: "50,000 sqm",
      currentStock: "42,500 sqm",
      utilization: 85,
      manager: "Mouad El Amrani",
      contact: "+212 600 112 233",
    },
    {
      warehouseId: "WH-002",
      name: "Marrakech Regional",
      location: "Marrakech",
      capacity: "25,000 sqm",
      currentStock: "18,750 sqm",
      utilization: 75,
      manager: "Samira Belhaj",
      contact: "+212 700 223 344",
    },
    {
      warehouseId: "WH-003",
      name: "Tangier Northern Hub",
      location: "Tangier",
      capacity: "30,000 sqm",
      currentStock: "12,000 sqm",
      utilization: 40,
      manager: "Leila Touimi",
      contact: "+212 650 334 455",
    },
    {
      warehouseId: "WH-004",
      name: "Oujda Eastern",
      location: "Oujda",
      capacity: "15,000 sqm",
      currentStock: "9,000 sqm",
      utilization: 60,
      manager: "Khalid Chraibi",
      contact: "+212 610 445 566",
    },
  ];

  return (
    <div className="w-full h-[calc(100vh-180px)] overflow-y-auto pb-6">
      {/* page header */}
      <ModernLogisticsHeader />

      {/* Fleet Management Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaTruck className="text-blue-500" />
          Fleet Management
        </h2>

        <div className="w-full overflow-x-auto whitespace-nowrap border rounded-sm mb-6">
          <div className="inline-block min-w-full">
            {/* Fleet table header */}
            <div className="flex text-xs font-medium font-inter h-10 tracking-wider bg-gray-200/25">
              {[
                "VEHICLE ID",
                "LICENSE PLATE",
                "TYPE",
                "CAPACITY",
                "CURRENT LOCATION",
                "STATUS",
                "DRIVER",
                "LAST MAINTENANCE",
                "NEXT MAINTENANCE",
                "MODEL",
                "ACTIONS",
              ].map((header, index) => (
                <div
                  key={index}
                  className="px-6 h-full hover:bg-gray-200/40 flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      header,
                      fleetData,
                      index,
                      "fleet"
                    )}px`,
                  }}
                >
                  {header}
                </div>
              ))}
            </div>

            {/* Fleet table content */}
            {fleetData.map((item, rowIndex) => (
              <div
                key={rowIndex}
                className="flex text-xs font-normal text-gray-600 h-10 border-t"
              >
                <div
                  className="px-6 h-full flex items-center text-blue-600 flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "VEHICLE ID",
                      fleetData,
                      0,
                      "fleet"
                    )}px`,
                  }}
                >
                  {item.vehicleId}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "LICENSE PLATE",
                      fleetData,
                      1,
                      "fleet"
                    )}px`,
                  }}
                >
                  {item.licensePlate}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth("TYPE", fleetData, 2, "fleet")}px`,
                  }}
                >
                  {item.type}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "CAPACITY",
                      fleetData,
                      3,
                      "fleet"
                    )}px`,
                  }}
                >
                  {item.capacity}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "CURRENT LOCATION",
                      fleetData,
                      4,
                      "fleet"
                    )}px`,
                  }}
                >
                  {item.currentLocation}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "STATUS",
                      fleetData,
                      5,
                      "fleet"
                    )}px`,
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
                    width: `${getColumnWidth(
                      "DRIVER",
                      fleetData,
                      6,
                      "fleet"
                    )}px`,
                  }}
                >
                  {item.driver}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "LAST MAINTENANCE",
                      fleetData,
                      7,
                      "fleet"
                    )}px`,
                  }}
                >
                  {item.lastMaintenance}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "NEXT MAINTENANCE",
                      fleetData,
                      8,
                      "fleet"
                    )}px`,
                  }}
                >
                  {item.nextMaintenance}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "MODEL",
                      fleetData,
                      9,
                      "fleet"
                    )}px`,
                  }}
                >
                  {item.model}
                </div>
                <div
                  className="px-6 h-full flex items-center gap-3 flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "ACTIONS",
                      fleetData,
                      10,
                      "fleet"
                    )}px`,
                  }}
                >
                  <FaMapMarkedAlt className="cursor-pointer text-amber-500" />
                  <LuPencilLine className="cursor-pointer text-green-500" />
                  <MdDelete className="cursor-pointer text-red-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={fleetData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* Warehouse Management Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaWarehouse className="text-blue-500" />
          Warehouse Management
        </h2>

        <div className="w-full overflow-x-auto whitespace-nowrap border rounded-sm mb-6">
          <div className="inline-block min-w-full">
            {/* Warehouse table header */}
            <div className="flex text-xs font-medium font-inter h-10 tracking-wider bg-gray-200/25">
              {[
                "WAREHOUSE ID",
                "NAME",
                "LOCATION",
                "CAPACITY",
                "CURRENT STOCK",
                "UTILIZATION",
                "MANAGER",
                "CONTACT",
                "ACTIONS",
              ].map((header, index) => (
                <div
                  key={index}
                  className="px-6 h-full hover:bg-gray-200/40 flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      header,
                      warehouses,
                      index,
                      "warehouse"
                    )}px`,
                  }}
                >
                  {header}
                </div>
              ))}
            </div>

            {/* Warehouse table content */}
            {warehouses.map((item, rowIndex) => (
              <div
                key={rowIndex}
                className="flex text-xs font-normal text-gray-600 h-10 border-t"
              >
                <div
                  className="px-6 h-full flex items-center text-blue-600 flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "WAREHOUSE ID",
                      warehouses,
                      0,
                      "warehouse"
                    )}px`,
                  }}
                >
                  {item.warehouseId}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "NAME",
                      warehouses,
                      1,
                      "warehouse"
                    )}px`,
                  }}
                >
                  {item.name}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "LOCATION",
                      warehouses,
                      2,
                      "warehouse"
                    )}px`,
                  }}
                >
                  {item.location}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "CAPACITY",
                      warehouses,
                      3,
                      "warehouse"
                    )}px`,
                  }}
                >
                  {item.capacity}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "CURRENT STOCK",
                      warehouses,
                      4,
                      "warehouse"
                    )}px`,
                  }}
                >
                  {item.currentStock}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "UTILIZATION",
                      warehouses,
                      5,
                      "warehouse"
                    )}px`,
                  }}
                >
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        item.utilization > 85
                          ? "bg-red-500"
                          : item.utilization > 70
                          ? "bg-amber-500"
                          : "bg-green-500"
                      }`}
                      style={{ width: `${item.utilization}%` }}
                    ></div>
                  </div>
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "MANAGER",
                      warehouses,
                      6,
                      "warehouse"
                    )}px`,
                  }}
                >
                  {item.manager}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "CONTACT",
                      warehouses,
                      7,
                      "warehouse"
                    )}px`,
                  }}
                >
                  {item.contact}
                </div>
                <div
                  className="px-6 h-full flex items-center gap-3 flex-shrink-0"
                  style={{
                    width: `${getColumnWidth(
                      "ACTIONS",
                      warehouses,
                      8,
                      "warehouse"
                    )}px`,
                  }}
                >
                  <FaBoxes className="cursor-pointer text-amber-500" />
                  <LuPencilLine className="cursor-pointer text-green-500" />
                  <MdDelete className="cursor-pointer text-red-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={warehouses.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* Analytics Dashboard */}
      <div className="mt-6">
        <LogisticsMetricsSummary fleet={fleetData} warehouses={warehouses} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FleetStatusChart fleet={fleetData} />
          <WarehouseCapacityChart warehouses={warehouses} />
        </div>
      </div>
    </div>
  );
};

// Helper function to calculate column width based on content
function getColumnWidth(header, data, columnIndex, type) {
  // Base width for the header text
  const headerWidth = header.length * 8 + 32; // 8px per character + padding

  // Find the widest content in this column
  let maxContentWidth = 0;
  data.forEach((item) => {
    let content = "";

    if (type === "fleet") {
      switch (columnIndex) {
        case 0:
          content = item.vehicleId;
          break;
        case 1:
          content = item.licensePlate;
          break;
        case 2:
          content = item.type;
          break;
        case 3:
          content = item.capacity;
          break;
        case 4:
          content = item.currentLocation;
          break;
        case 5:
          content = item.status.name;
          break;
        case 6:
          content = item.driver;
          break;
        case 7:
          content = item.lastMaintenance;
          break;
        case 8:
          content = item.nextMaintenance;
          break;
        case 9:
          content = "Fuel Level";
          break;
        case 10:
          content = "Actions";
          break;
      }
    } else if (type === "warehouse") {
      switch (columnIndex) {
        case 0:
          content = item.warehouseId;
          break;
        case 1:
          content = item.name;
          break;
        case 2:
          content = item.location;
          break;
        case 3:
          content = item.capacity;
          break;
        case 4:
          content = item.currentStock;
          break;
        case 5:
          content = "Utilization";
          break;
        case 6:
          content = item.manager;
          break;
        case 7:
          content = item.contact;
          break;
        case 8:
          content = "Actions";
          break;
      }
    }

    const contentWidth = content.toString().length * 8 + 32;
    if (contentWidth > maxContentWidth) maxContentWidth = contentWidth;
  });

  // Return the larger of header width or max content width
  return Math.max(headerWidth, maxContentWidth, 120); // Minimum width of 120px
}

export default Logistics;
