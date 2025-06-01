import React, { useEffect, useState } from "react";
import { FaBox, FaBoxOpen, FaExclamationTriangle, FaEye, FaCheckCircle } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import Barcode from "react-barcode";
import ModernInventoryHeader from "../Tools/inventory/ModernInventoryHeader";
import InventoryMetricsSummary from "../Tools/inventory/InventoryMetricsSummary";
import InventoryCategoryChart from "../Tools/inventory/InventoryCategoryChart";
import StockMovementChart from "../Tools/inventory/StockMovementChart";
import Pagination from "../Global/Pagination";
import { useSelector } from "react-redux";

const Inventory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [statusDetails, setStatusDetails] = useState({});

  const inventories = useSelector((state) => state.inventory.inventories);

  useEffect(() => {
    if (inventories && inventories.length > 0) {
      const statusMap = {
        'in-stock': {
          name: "In Stock",
          icon: FaCheckCircle,
          color: "text-green-500",
          bg: "bg-green-100"
        },
        'low-stock': {
          name: "Low Stock",
          icon: FaExclamationTriangle,
          color: "text-amber-500",
          bg: "bg-amber-100"
        },
        'out-of-stock': {
          name: "Out of Stock",
          icon: FaBoxOpen,
          color: "text-red-500",
          bg: "bg-red-100"
        }
      };

      const details = inventories.reduce((acc, inventory) => {
        acc[inventory.id] = statusMap[inventory.status] || {
          name: "Unknown Status",
          icon: FaBoxOpen,
          color: "text-gray-500",
          bg: "bg-gray-100"
        };
        return acc;
      }, {});

      setStatusDetails(details);
    }
  }, [inventories]);

  // Calculate paginated data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inventories?.slice(indexOfFirstItem, indexOfLastItem) || [];

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
              <th className="px-6 py-3 text-left whitespace-nowrap">ID</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">
                PRODUCT ID
              </th>
              <th className="px-6 py-3 text-left whitespace-nowrap">BARCODE</th>
              <th className="px-6 py-3 text-left min-w-[200px]">NAME</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">
                CATEGORY
              </th>
              <th className="px-6 py-3 text-left min-w-[180px]">
                STOCK LEVELS
              </th>
              <th className="px-6 py-3 text-left whitespace-nowrap">
                LOCATION
              </th>
              <th className="px-6 py-3 text-left whitespace-nowrap">
                WAREHOUSE
              </th>
              <th className="px-6 py-3 text-left whitespace-nowrap">
                LAST UPDATED
              </th>
              <th className="px-6 py-3 text-left whitespace-nowrap">STATUS</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((item) => (
              <tr
                key={item.id}
                className="text-xs font-normal text-gray-600 h-16"
              >
                <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-semibold">
                  {item.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">
                  {item.product_id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Barcode
                    value={item.product?.barcode || ''}
                    width={1}
                    height={30}
                    fontSize={10}
                    margin={0}
                    displayValue={false}
                  />
                </td>
                <td className="px-6 py-4 min-w-[200px]">{item.product?.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.product?.category}</td>
                <td className="px-6 py-4 min-w-[280px]">
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between text-xs">
                      <span>Current:</span>
                      <span className="font-medium">{item.current_stock}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Available:</span>
                      <span className="font-medium">{item.available_stock}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div
                        className={`h-1.5 rounded-full ${
                          item.current_stock < item.min_stock_level
                            ? "bg-red-500"
                            : item.current_stock < item.min_stock_level * 1.5
                            ? "bg-amber-500"
                            : "bg-green-500"
                        }`}
                        style={{
                          width: `${Math.min(
                            100,
                            (item.current_stock / item.max_stock_level) * 100
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.warehouse}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(item.updated_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {statusDetails[item.id] && (
                    <div
                      className={`flex items-center px-2 py-1 gap-1 rounded-xl ${statusDetails[item.id].color} ${statusDetails[item.id].bg}`}
                    >
                      {React.createElement(statusDetails[item.id].icon)}
                      {statusDetails[item.id].name}
                    </div>
                  )}
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

      {inventories && (
        <Pagination
          currentPage={currentPage}
          totalItems={inventories.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Analytics Dashboard */}
      <div className="mt-6">
        <InventoryMetricsSummary inventory={inventories} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InventoryCategoryChart inventory={inventories} />
          <StockMovementChart inventory={inventories} />
        </div>
      </div>
    </div>
  );
};

export default Inventory;