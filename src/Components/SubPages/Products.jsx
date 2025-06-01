import React, {useState} from "react";
import { FaBox, FaEye, FaTimesCircle, FaClock } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import Barcode from "react-barcode";
import ModernProductsHeader from "../Tools/products/ModernProductsHeader";
import ProductsMetricsSummary from "../Tools/products/ProductsMetricsSummary";
import ProductCategoryChart from "../Tools/products/ProductCategoryChart";
import ProductStockChart from "../Tools/products/ProductStockChart";
import Pagination from "../Global/Pagination";
import { useSelector } from "react-redux";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const products = useSelector((state) => state.productsData.products);

  const fakeProducts = [
    {
      productId: "PC-1220",
      barcode: "123456789012",
      name: "Polycarbonate Sheet (10mm, Clear)",
      category: "Polycarbonate",
      thickness: "10mm",
      color: "Clear",
      dimensions: "1200x2400mm",
      stock: 450,
      price: "1,850 MAD/sheet",
      status: "In Stock",
    },
    {
      productId: "ALB-4550",
      barcode: "234567890123",
      name: "Alubond Fireproof Panel (4mm)",
      category: "Aluminum",
      thickness: "4mm",
      color: "Brushed Aluminum",
      dimensions: "1220x2440mm",
      stock: 320,
      price: "2,400 MAD/panel",
      status: "In Stock",
    },
    {
      productId: "GL-8800",
      barcode: "345678901234",
      name: "Laminated Safety Glass (8mm)",
      category: "Glass",
      thickness: "8mm",
      color: "Bronze Tinted",
      dimensions: "Custom sizes",
      stock: 0,
      price: "1,200 MAD/sqm",
      status: "Out of Stock",
    },
    {
      productId: "MR-6550",
      barcode: "456789012345",
      name: "Silver Mirror (6mm)",
      category: "Mirror",
      thickness: "6mm",
      color: "Silver",
      dimensions: "1500x3000mm",
      stock: 85,
      price: "950 MAD/piece",
      status: "Low Stock",
    },
    {
      productId: "PC-5500",
      barcode: "567890123456",
      name: "Multiwall Polycarbonate (5mm)",
      category: "Polycarbonate",
      thickness: "5mm",
      color: "Opal",
      dimensions: "2100x6000mm",
      stock: 620,
      price: "1,650 MAD/sqm",
      status: "In Stock",
    },
    {
      productId: "TG-1212",
      barcode: "678901234567",
      name: "Tempered Glass (12mm)",
      category: "Glass",
      thickness: "12mm",
      color: "Clear",
      dimensions: "1000x2000mm",
      stock: 210,
      price: "1,450 MAD/sheet",
      status: "In Stock",
    },
    {
      productId: "ALU-7700",
      barcode: "789012345678",
      name: "Aluminum Composite Panel (3mm)",
      category: "Aluminum",
      thickness: "3mm",
      color: "Pearl White",
      dimensions: "1250x2500mm",
      stock: 0,
      price: "2,100 MAD/panel",
      status: "Out of Stock",
    },
    {
      productId: "DGL-3300",
      barcode: "890123456789",
      name: "Decorative Glass (6mm)",
      category: "Glass",
      thickness: "6mm",
      color: "Frosted",
      dimensions: "Custom sizes",
      stock: 45,
      price: "1,750 MAD/sqm",
      status: "Low Stock",
    },
    {
      productId: "TGL-8800",
      barcode: "901234567890",
      name: "Toughened Glass (10mm)",
      category: "Glass",
      thickness: "10mm",
      color: "Blue Tinted",
      dimensions: "900x2100mm",
      stock: 180,
      price: "1,550 MAD/sheet",
      status: "In Stock",
    },
    {
      productId: "AMR-2200",
      barcode: "012345678901",
      name: "Antique Mirror (5mm)",
      category: "Mirror",
      thickness: "5mm",
      color: "Antique Silver",
      dimensions: "1200x2400mm",
      stock: 30,
      price: "1,250 MAD/piece",
      status: "Low Stock",
    },
  ];

  return (
    <div className="w-full h-[calc(100vh-180px)] overflow-y-auto pb-6">
      {/* page header */}
      <ModernProductsHeader />

      {/* table container */}
      <div className="w-full overflow-x-auto border rounded-sm">
        <table className="min-w-full divide-y divide-gray-200">
          {/* table header */}
          <thead className="bg-gray-200/25">
            <tr className="text-xs font-medium text-black/70 font-inter h-10 tracking-wider">
              <th className="px-6 py-3 text-left whitespace-nowrap">PRODUCT ID</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">BARCODE</th>
              <th className="px-6 py-3 text-left min-w-[250px]">NAME</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">CATEGORY</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">THICKNESS</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">COLOR</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">DIMENSIONS</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">STOCK</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">PRICE</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">STATUS</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {products
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
              .map((item, rowIndex) => (
                <tr key={rowIndex} className="text-xs font-normal text-gray-600 h-10">
                  <td className="px-6 py-3 whitespace-nowrap text-blue-600">
                    {item.id}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <Barcode
                      value={item.barcode}
                      width={1}
                      height={30}
                      fontSize={10}
                      margin={0}
                      displayValue={false}
                    />
                  </td>
                  <td className="px-6 py-3 min-w-[250px]">
                    {item.name}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.category}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.thickness}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.color}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.dimensions}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.current_stock}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.price}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <div
                      className={`flex items-center px-2 py-1 gap-1 rounded-xl ${
                        item.stock_status === "in-stock"
                          ? "text-green-500 bg-green-100"
                          : item.stock_status === "out-of-stock"
                          ? "text-red-500 bg-red-100"
                          : "text-amber-500 bg-amber-100"
                      }`}
                    >
                      {item.stock_status === "in-stock" ? (
                        <FaBox className="text-green-500" />
                      ) : item.stock_status === "out-of-stock" ? (
                        <FaTimesCircle className="text-red-500" />
                      ) : (
                        <FaClock className="text-amber-500" />
                      )}
                      {item.stock_status === 'in-stock' ? 'In Stock' : item.stock_status === 'out-of-stock' ? 'Out Of Stock' : 'Low Stock'}
                    </div>
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
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* Analytics Dashboard */}
      <div className="mt-6">
        <ProductsMetricsSummary products={products} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProductCategoryChart products={products} />
          <ProductStockChart products={products} />
        </div>
      </div>
    </div>
  );
};

export default Products;