import React, { useState } from "react";
import {
  FaBox,
  FaBoxOpen,
  FaExclamationTriangle,
  FaEye,
} from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import Barcode from "react-barcode";
import ModernInventoryHeader from "../Tools/inventory/ModernInventoryHeader";
import InventoryMetricsSummary from "../Tools/inventory/InventoryMetricsSummary";
import InventoryCategoryChart from "../Tools/inventory/InventoryCategoryChart";
import StockMovementChart from "../Tools/inventory/StockMovementChart";
import Pagination from "../Global/Pagination";

const Inventory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
  const inventoryItems = [
    {
      sku: "PC-1220",
      barcode: "123456789012",
      name: "Polycarbonate Sheet (10mm, Clear)",
      category: "Polycarbonate",
      currentStock: 450,
      availableStock: 420,
      allocatedStock: 30,
      minStockLevel: 100,
      maxStockLevel: 1000,
      location: "A-12-4",
      warehouse: "Casablanca Main",
      lastUpdated: "2024-05-15",
      status: {
        name: "In Stock",
        icon: FaBox,
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      sku: "ALB-4550",
      barcode: "234567890123",
      name: "Alubond Fireproof Panel (4mm)",
      category: "Aluminum",
      currentStock: 320,
      availableStock: 300,
      allocatedStock: 20,
      minStockLevel: 50,
      maxStockLevel: 500,
      location: "B-8-2",
      warehouse: "Casablanca Main",
      lastUpdated: "2024-05-18",
      status: {
        name: "Low Stock",
        icon: FaExclamationTriangle,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
    },
    {
      sku: "GL-8800",
      barcode: "345678901234",
      name: "Laminated Safety Glass (8mm)",
      category: "Glass",
      currentStock: 0,
      availableStock: 0,
      allocatedStock: 0,
      minStockLevel: 20,
      maxStockLevel: 200,
      location: "C-5-1",
      warehouse: "Marrakech Regional",
      lastUpdated: "2024-05-20",
      status: {
        name: "Out of Stock",
        icon: FaBoxOpen,
        color: "text-red-500",
        bg: "bg-red-100",
      },
    },
    {
      sku: "MR-6550",
      barcode: "456789012345",
      name: "Silver Mirror (6mm)",
      category: "Mirror",
      currentStock: 85,
      availableStock: 80,
      allocatedStock: 5,
      minStockLevel: 30,
      maxStockLevel: 150,
      location: "D-3-7",
      warehouse: "Tangier Northern Hub",
      lastUpdated: "2024-05-22",
      status: {
        name: "In Stock",
        icon: FaBox,
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      sku: "PC-5500",
      barcode: "567890123456",
      name: "Multiwall Polycarbonate (5mm)",
      category: "Polycarbonate",
      currentStock: 620,
      availableStock: 600,
      allocatedStock: 20,
      minStockLevel: 100,
      maxStockLevel: 800,
      location: "A-15-3",
      warehouse: "Casablanca Main",
      lastUpdated: "2024-05-10",
      status: {
        name: "In Stock",
        icon: FaBox,
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      sku: "TG-1212",
      barcode: "678901234567",
      name: "Tempered Glass (12mm)",
      category: "Glass",
      currentStock: 210,
      availableStock: 200,
      allocatedStock: 10,
      minStockLevel: 50,
      maxStockLevel: 300,
      location: "B-10-5",
      warehouse: "Oujda Eastern",
      lastUpdated: "2024-05-05",
      status: {
        name: "In Stock",
        icon: FaBox,
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      sku: "ALU-7700",
      barcode: "789012345678",
      name: "Aluminum Composite Panel (3mm)",
      category: "Aluminum",
      currentStock: 0,
      availableStock: 0,
      allocatedStock: 0,
      minStockLevel: 40,
      maxStockLevel: 250,
      location: "C-7-2",
      warehouse: "Marrakech Regional",
      lastUpdated: "2024-05-25",
      status: {
        name: "Out of Stock",
        icon: FaBoxOpen,
        color: "text-red-500",
        bg: "bg-red-100",
      },
    },
    {
      sku: "DGL-3300",
      barcode: "890123456789",
      name: "Decorative Glass (6mm)",
      category: "Glass",
      currentStock: 45,
      availableStock: 40,
      allocatedStock: 5,
      minStockLevel: 25,
      maxStockLevel: 100,
      location: "D-2-9",
      warehouse: "Tangier Northern Hub",
      lastUpdated: "2024-05-28",
      status: {
        name: "Low Stock",
        icon: FaExclamationTriangle,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
    },
    {
      sku: "TGL-8800",
      barcode: "901234567890",
      name: "Toughened Glass (10mm)",
      category: "Glass",
      currentStock: 180,
      availableStock: 170,
      allocatedStock: 10,
      minStockLevel: 50,
      maxStockLevel: 250,
      location: "A-9-6",
      warehouse: "Casablanca Main",
      lastUpdated: "2024-05-30",
      status: {
        name: "In Stock",
        icon: FaBox,
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      sku: "AMR-2200",
      barcode: "012345678901",
      name: "Antique Mirror (5mm)",
      category: "Mirror",
      currentStock: 30,
      availableStock: 25,
      allocatedStock: 5,
      minStockLevel: 20,
      maxStockLevel: 80,
      location: "B-5-3",
      warehouse: "Oujda Eastern",
      lastUpdated: "2024-06-02",
      status: {
        name: "Low Stock",
        icon: FaExclamationTriangle,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
    },
  ];


return (
    <div className="w-full h-[calc(100vh-180px)] overflow-y-auto pb-6">
      {/* page header */}
      <ModernInventoryHeader />

      {/* table container */}
      <div className="w-full overflow-x-auto border rounded-sm">
        <table className="min-w-full divide-y divide-gray-200">
          {/* table header */}
          <thead className="bg-gray-200/25">
            <tr className="text-xs font-medium font-inter text-black/70 h-10 tracking-wider">
              <th className="px-6 py-3 text-left whitespace-nowrap">SKU</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">BARCODE</th>
              <th className="px-6 py-3 text-left min-w-[200px]">NAME</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">CATEGORY</th>
              <th className="px-6 py-3 text-left min-w-[180px]">STOCK LEVELS</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">LOCATION</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">WAREHOUSE</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">LAST UPDATED</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">STATUS</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {inventoryItems.map((item, rowIndex) => (
              <tr key={rowIndex} className="text-xs font-normal text-gray-600 h-16">
                <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                  {item.sku}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Barcode
                    value={item.barcode}
                    width={1}
                    height={30}
                    fontSize={10}
                    margin={0}
                    displayValue={false}
                  />
                </td>
                <td className="px-6 py-4 min-w-[200px]">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.category}
                </td>
                <td className="px-6 py-4 min-w-[280px]">
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between text-xs">
                      <span>Current:</span>
                      <span className="font-medium">{item.currentStock}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Available:</span>
                      <span className="font-medium">{item.availableStock}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div
                        className={`h-1.5 rounded-full ${
                          item.currentStock < item.minStockLevel
                            ? "bg-red-500"
                            : item.currentStock < item.minStockLevel * 1.5
                            ? "bg-amber-500"
                            : "bg-green-500"
                        }`}
                        style={{
                          width: `${Math.min(
                            100,
                            (item.currentStock / item.maxStockLevel) * 100
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.warehouse}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.lastUpdated}
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
        totalItems={inventoryItems.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* Analytics Dashboard */}
      <div className="mt-6">
        <InventoryMetricsSummary inventory={inventoryItems} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InventoryCategoryChart inventory={inventoryItems} />
          <StockMovementChart inventory={inventoryItems} />
        </div>
      </div>
    </div>
  );
};

export default Inventory;



const inventoryItems = [
    {
      produc_id: "PC-1220",
      currentStock: 450,
      availableStock: 420,
      allocatedStock: 30,
      minStockLevel: 100,
      maxStockLevel: 1000,
      location: "A-12-4",
      warehouse: "Casablanca Main",
      status: "In Stock",
    },
    {
      produc_id: "ALB-4550",
      currentStock: 320,
      availableStock: 300,
      allocatedStock: 20,
      minStockLevel: 50,
      maxStockLevel: 500,
      location: "B-8-2",
      warehouse: "Casablanca Main",
      status: "Low Stock",
    },
    {
      produc_id: "GL-8800",
      currentStock: 0,
      availableStock: 0,
      allocatedStock: 0,
      minStockLevel: 20,
      maxStockLevel: 200,
      location: "C-5-1",
      warehouse: "Marrakech Regional",
      status: "Out of Stock",
    },
    {
      produc_id: "MR-6550",
      currentStock: 85,
      availableStock: 80,
      allocatedStock: 5,
      minStockLevel: 30,
      maxStockLevel: 150,
      location: "D-3-7",
      warehouse: "Tangier Northern Hub",
      status: "In Stock",
    },
    {
      produc_id: "PC-5500",
      currentStock: 620,
      availableStock: 600,
      allocatedStock: 20,
      minStockLevel: 100,
      maxStockLevel: 800,
      location: "A-15-3",
      warehouse: "Casablanca Main",
      status: "In Stock",
    },
    {
      produc_id: "TG-1212",
      currentStock: 210,
      availableStock: 200,
      allocatedStock: 10,
      minStockLevel: 50,
      maxStockLevel: 300,
      location: "B-10-5",
      warehouse: "Oujda Eastern",
      status: "In Stock",
    },
    {
      produc_id: "ALU-7700",
      currentStock: 0,
      availableStock: 0,
      allocatedStock: 0,
      minStockLevel: 40,
      maxStockLevel: 250,
      location: "C-7-2",
      warehouse: "Marrakech Regional",
      status: "Out of Stock",
    },
    {
      produc_id: "DGL-3300",
      currentStock: 45,
      availableStock: 40,
      allocatedStock: 5,
      minStockLevel: 25,
      maxStockLevel: 100,
      location: "D-2-9",
      warehouse: "Tangier Northern Hub",
      status: "Low Stock",
    },
    {
      produc_id: "TGL-8800",
      currentStock: 180,
      availableStock: 170,
      allocatedStock: 10,
      minStockLevel: 50,
      maxStockLevel: 250,
      location: "A-9-6",
      warehouse: "Casablanca Main",
      status: "In Stock",
    },
    {
      produc_id: "AMR-2200",
      currentStock: 30,
      availableStock: 25,
      allocatedStock: 5,
      minStockLevel: 20,
      maxStockLevel: 80,
      location: "B-5-3",
      warehouse: "Oujda Eastern",
      status: "Low Stock",
    },
  ];