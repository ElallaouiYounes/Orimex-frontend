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

        <div className="w-full overflow-x-auto border rounded-sm mb-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200/25">
              <tr className="text-xs font-medium font-inter h-10 tracking-wider">
                <th className="px-6 py-3 text-left whitespace-nowrap">VEHICLE ID</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">LICENSE PLATE</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">TYPE</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">CAPACITY</th>
                <th className="px-6 py-3 text-left min-w-[200px]">CURRENT LOCATION</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">STATUS</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">DRIVER</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">LAST MAINTENANCE</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">NEXT MAINTENANCE</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">MODEL</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {fleetData.map((item, rowIndex) => (
                <tr key={rowIndex} className="text-xs font-normal text-gray-600 h-10">
                  <td className="px-6 py-3 whitespace-nowrap text-blue-600">
                    {item.vehicleId}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.licensePlate}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.type}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.capacity}
                  </td>
                  <td className="px-6 py-3 min-w-[200px]">
                    {item.currentLocation}
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
                    {item.driver}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.lastMaintenance}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.nextMaintenance}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.model}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <FaMapMarkedAlt className="cursor-pointer text-amber-500" />
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
          totalItems={fleetData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Warehouse Management Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaWarehouse className="text-blue-500" />
          Warehouse Management
        </h2>

        <div className="w-full overflow-x-auto border rounded-sm mb-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200/25">
              <tr className="text-xs font-medium font-inter text-black/70 h-10 tracking-wider">
                <th className="px-6 py-3 text-left whitespace-nowrap">WAREHOUSE ID</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">NAME</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">LOCATION</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">CAPACITY</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">CURRENT STOCK</th>
                <th className="px-6 py-3 text-left min-w-[150px]">UTILIZATION</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">MANAGER</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">CONTACT</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {warehouses.map((item, rowIndex) => (
                <tr key={rowIndex} className="text-xs font-normal text-gray-600 h-10">
                  <td className="px-6 py-3 whitespace-nowrap text-blue-600">
                    {item.warehouseId}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.location}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.capacity}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.currentStock}
                  </td>
                  <td className="px-6 py-3 min-w-[150px]">
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
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.manager}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.contact}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <FaBoxes className="cursor-pointer text-amber-500" />
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
          totalItems={warehouses.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>

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

export default Logistics;