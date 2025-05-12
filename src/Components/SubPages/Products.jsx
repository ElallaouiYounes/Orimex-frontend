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

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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
      <div className="w-full overflow-x-auto whitespace-nowrap border rounded-sm">
        {/* table */}
        <div className="inline-block min-w-full">
          {/* table header */}
          <div className="flex text-xs font-medium font-inter h-10 tracking-wider bg-gray-200/25">
            {[
              "PRODUCT ID",
              "BARCODE",
              "NAME",
              "CATEGORY",
              "THICKNESS",
              "COLOR",
              "DIMENSIONS",
              "STOCK",
              "PRICE",
              "STATUS",
              "ACTIONS",
            ].map((header, index) => (
              <div
                key={`header-${index}`}
                className="px-6 h-full hover:bg-gray-200/40 flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth(header, fakeProducts, index)}px`,
                }}
              >
                {header}
              </div>
            ))}
          </div>

          {/* table content */}
          {fakeProducts
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item, rowIndex) => (
              <div
                key={rowIndex}
                className="flex text-xs font-normal text-gray-600 h-10 border-t"
              >
                <div
                  className="px-6 h-full flex items-center text-blue-600 flex-shrink-0"
                  style={{
                    width: `${getColumnWidth("PRODUCT ID", fakeProducts, 0)}px`,
                  }}
                >
                  {item.productId}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth("BARCODE", fakeProducts, 1)}px`,
                  }}
                >
                  <div className="w-full">
                    <Barcode
                      value={item.barcode}
                      width={1}
                      height={30}
                      fontSize={10}
                      margin={0}
                      displayValue={false}
                    />
                  </div>
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth("NAME", fakeProducts, 2)}px`,
                  }}
                >
                  {item.name}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth("CATEGORY", fakeProducts, 3)}px`,
                  }}
                >
                  {item.category}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth("THICKNESS", fakeProducts, 4)}px`,
                  }}
                >
                  {item.thickness}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth("COLOR", fakeProducts, 5)}px`,
                  }}
                >
                  {item.color}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth("DIMENSIONS", fakeProducts, 6)}px`,
                  }}
                >
                  {item.dimensions}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth("STOCK", fakeProducts, 7)}px`,
                  }}
                >
                  {item.stock}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth("PRICE", fakeProducts, 8)}px`,
                  }}
                >
                  {item.price}
                </div>
                <div
                  className="px-6 h-full flex items-center flex-shrink-0"
                  style={{
                    width: `${getColumnWidth("STATUS", fakeProducts, 9)}px`,
                  }}
                >
                  <div
                    className={`flex items-center px-2 py-1 gap-1 rounded-xl ${
                      item.status === "In Stock"
                        ? "text-green-500 bg-green-100"
                        : item.status === "Out of Stock"
                        ? "text-red-500 bg-red-100"
                        : "text-amber-500 bg-amber-100"
                    }`}
                  >
                    {item.status === "In Stock" ? (
                      <FaBox className="text-green-500" />
                    ) : item.status === "Out of Stock" ? (
                      <FaTimesCircle className="text-red-500" />
                    ) : (
                      <FaClock className="text-amber-500" />
                    )}
                    {item.status}
                  </div>
                </div>
                <div
                  className="px-6 h-full flex items-center gap-3 flex-shrink-0"
                  style={{
                    width: `${getColumnWidth("ACTIONS", fakeProducts, 11)}px`,
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
        totalItems={fakeProducts.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* Analytics Dashboard */}
      <div className="mt-6">
        <ProductsMetricsSummary products={fakeProducts} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProductCategoryChart products={fakeProducts} />
          <ProductStockChart products={fakeProducts} />
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
        content = item.productId;
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
        content = item.thickness;
        break;
      case 5:
        content = item.color;
        break;
      case 6:
        content = item.dimensions;
        break;
      case 7:
        content = item.stock;
        break;
      case 8:
        content = item.price;
        break;
      case 9:
        content = item.status;
        break;
      case 10:
        content = "Actions";
        break;
    }

    const contentWidth =
      columnIndex === 1 ? 150 : content.toString().length * 8 + 32;
    if (contentWidth > maxContentWidth) maxContentWidth = contentWidth;
  });

  // Return the larger of header width or max content width
  return Math.max(headerWidth, maxContentWidth, 120); // Minimum width of 120px
}

export default Products;
