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
      <div className="w-full overflow-x-auto whitespace-nowrap border rounded-sm">
        {/* table */}
        <div className="inline-block min-w-full">
          {/* table header */}
          <div className="flex text-xs font-medium font-inter h-10 tracking-wider bg-gray-200/25">
            {[
              "SKU",
              "BARCODE",
              "NAME",
              "CATEGORY",
              "STOCK LEVELS",
              "LOCATION",
              "WAREHOUSE",
              "LAST UPDATED",
              "STATUS",
              "ACTIONS",
            ].map((header, index) => (
              <div
                key={index}
                className="px-6 h-full hover:bg-gray-200/40 flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth(header, inventoryItems, index)}px`,
                }}
              >
                {header}
              </div>
            ))}
          </div>

          {/* table content */}
          {inventoryItems.map((item, rowIndex) => (
            <div
              key={rowIndex}
              className="flex text-xs font-normal text-gray-600 h-16 border-t"
            >
              <div
                className="px-6 h-full flex items-center text-blue-600 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("SKU", inventoryItems, 0)}px`,
                }}
              >
                {item.sku}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("BARCODE", inventoryItems, 1)}px`,
                }}
              >
                <Barcode
                  value={item.barcode}
                  width={1}
                  height={30}
                  fontSize={10}
                  margin={0}
                  displayValue={false}
                />
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("NAME", inventoryItems, 2)}px`,
                }}
              >
                {item.name}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("CATEGORY", inventoryItems, 3)}px`,
                }}
              >
                {item.category}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("STOCK LEVELS", inventoryItems, 4)}px`,
                }}
              >
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
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("LOCATION", inventoryItems, 5)}px`,
                }}
              >
                {item.location}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("WAREHOUSE", inventoryItems, 6)}px`,
                }}
              >
                {item.warehouse}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("LAST UPDATED", inventoryItems, 7)}px`,
                }}
              >
                {item.lastUpdated}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("STATUS", inventoryItems, 8)}px`,
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
                className="px-6 h-full flex items-center gap-3 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("ACTIONS", inventoryItems, 9)}px`,
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
        content = item.sku;
        break;
      case 1:
        content = item.barcode;
        break;
      case 2:
        content = item.name;
        break;
      case 3:
        content = item.category;
        break;
      case 4:
        content = "Current: " + item.currentStock + " Available: " + item.availableStock;
        break;
      case 5:
        content = item.location;
        break;
      case 6:
        content = item.warehouse;
        break;
      case 7:
        content = item.lastUpdated;
        break;
      case 8:
        content = item.status.name;
        break;
      case 9:
        content = "Actions";
        break;
    }

    const contentWidth = columnIndex === 1 ? 150 : content.toString().length * 8 + 32;
    if (contentWidth > maxContentWidth) maxContentWidth = contentWidth;
  });

  // Return the larger of header width or max content width
  return Math.max(headerWidth, maxContentWidth, 120); // Minimum width of 120px
}

export default Inventory;