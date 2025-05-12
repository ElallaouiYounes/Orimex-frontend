import React, { useState } from "react";
import {
  FaEye,
  FaMoneyBillWave,
  FaCreditCard,
  FaExchangeAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
} from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import ModernTransactionsHeader from "../Tools/transactions/ModernTransactionsHeader";
import TransactionsMetricsSummary from "../Tools/transactions/TransactionsMetricsSummary";
import PaymentMethodChart from "../Tools/transactions/PaymentMethodChart";
import TransactionTrendChart from "../Tools/transactions/TransactionTrendChart";
import Pagination from "../Global/Pagination";

const Transactions = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
  const fakeTransactions = [
    {
      transactionId: "TXN-2024-001",
      orderId: "LNIV-2024-001",
      customerName: "Casablanca Tower Contractors",
      date: "2024-05-16",
      amount: "245,000 MAD",
      paymentMethod: {
        name: "Bank Transfer",
        icon: FaExchangeAlt,
        color: "text-blue-500",
        bg: "bg-blue-100",
      },
      status: {
        name: "Completed",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      invoiceNumber: "INV-2024-001",
      notes: "Final payment for order",
    },
    {
      transactionId: "TXN-2024-002",
      orderId: "LNIV-2024-002",
      customerName: "Marrakech Glass Solutions",
      date: "2024-05-19",
      amount: "60,250 MAD",
      paymentMethod: {
        name: "Bank Check",
        icon: FaCreditCard,
        color: "text-purple-500",
        bg: "bg-purple-100",
      },
      status: {
        name: "Completed",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      invoiceNumber: "INV-2024-002",
      notes: "50% advance payment",
    },
    {
      transactionId: "TXN-2024-003",
      orderId: "LNIV-2024-003",
      customerName: "Rabat Architectural Glass",
      date: "2024-05-21",
      amount: "120,000 MAD",
      paymentMethod: {
        name: "Cash",
        icon: FaMoneyBillWave,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      status: {
        name: "Pending",
        icon: FaClock,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
      invoiceNumber: "INV-2024-003",
      notes: "Deposit for laminated glass",
    },
    {
      transactionId: "TXN-2024-004",
      orderId: "LNIV-2024-004",
      customerName: "Tangier Mirror Works",
      date: "2024-05-23",
      amount: "193,600 MAD",
      paymentMethod: {
        name: "Bank Transfer",
        icon: FaExchangeAlt,
        color: "text-blue-500",
        bg: "bg-blue-100",
      },
      status: {
        name: "Completed",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      invoiceNumber: "INV-2024-004",
      notes: "Full payment for mirrors",
    },
    {
      transactionId: "TXN-2024-005",
      orderId: "LNIV-2024-005",
      customerName: "Fes Polycarbonate Ltd",
      date: "2024-05-11",
      amount: "45,000 MAD",
      paymentMethod: {
        name: "Bank Check",
        icon: FaCreditCard,
        color: "text-purple-500",
        bg: "bg-purple-100",
      },
      status: {
        name: "Failed",
        icon: FaTimesCircle,
        color: "text-red-500",
        bg: "bg-red-100",
      },
      invoiceNumber: "INV-2024-005",
      notes: "Payment declined - card expired",
    },
    {
      transactionId: "TXN-2024-006",
      orderId: "LNIV-2024-006",
      customerName: "Oujda Glass Distributors",
      date: "2024-05-06",
      amount: "89,375 MAD",
      paymentMethod: {
        name: "Bank Transfer",
        icon: FaExchangeAlt,
        color: "text-blue-500",
        bg: "bg-blue-100",
      },
      status: {
        name: "Completed",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      invoiceNumber: "INV-2024-006",
      notes: "Refund processed",
    },
    {
      transactionId: "TXN-2024-007",
      orderId: "LNIV-2024-007",
      customerName: "Agadir Aluminum Systems",
      date: "2024-05-26",
      amount: "156,200 MAD",
      paymentMethod: {
        name: "Bank Transfer",
        icon: FaExchangeAlt,
        color: "text-blue-500",
        bg: "bg-blue-100",
      },
      status: {
        name: "Pending",
        icon: FaClock,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
      invoiceNumber: "INV-2024-007",
      notes: "First installment",
    },
    {
      transactionId: "TXN-2024-008",
      orderId: "LNIV-2024-008",
      customerName: "Meknes Glass Innovations",
      date: "2024-05-29",
      amount: "78,400 MAD",
      paymentMethod: {
        name: "Cash",
        icon: FaMoneyBillWave,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      status: {
        name: "Completed",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      invoiceNumber: "INV-2024-008",
      notes: "On-site payment",
    },
    {
      transactionId: "TXN-2024-009",
      orderId: "LNIV-2024-009",
      customerName: "Kenitra Window Solutions",
      date: "2024-05-31",
      amount: "44,650 MAD",
      paymentMethod: {
        name: "Bank Check",
        icon: FaCreditCard,
        color: "text-purple-500",
        bg: "bg-purple-100",
      },
      status: {
        name: "Completed",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      invoiceNumber: "INV-2024-009",
      notes: "Initial deposit",
    },
    {
      transactionId: "TXN-2024-010",
      orderId: "LNIV-2024-010",
      customerName: "El Jadida Mirror Art",
      date: "2024-06-03",
      amount: "89,300 MAD",
      paymentMethod: {
        name: "Bank Transfer",
        icon: FaExchangeAlt,
        color: "text-blue-500",
        bg: "bg-blue-100",
      },
      status: {
        name: "Pending",
        icon: FaClock,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
      invoiceNumber: "INV-2024-010",
      notes: "Final payment upon delivery",
    },
  ];

  return (
    <div className="w-full h-[calc(100vh-180px)] overflow-y-auto pb-6">
      {/* page header */}
      <ModernTransactionsHeader />

      {/* table container */}
      <div className="w-full overflow-x-auto whitespace-nowrap border rounded-sm">
        {/* table */}
        <div className="inline-block min-w-full">
          {/* table header */}
          <div className="flex text-xs font-medium font-inter h-10 tracking-wider bg-gray-200/25">
            {[
              "TRANSACTION ID",
              "ORDER ID",
              "CUSTOMER NAME",
              "DATE",
              "AMOUNT",
              "PAYMENT METHOD",
              "STATUS",
              "INVOICE NUMBER",
              "NOTES",
              "ACTIONS",
            ].map((header, index) => (
              <div
                key={index}
                className="px-6 h-full hover:bg-gray-200/40 flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth(header, fakeTransactions, index)}px`,
                }}
              >
                {header}
              </div>
            ))}
          </div>

          {/* table content */}
          {fakeTransactions.map((item, rowIndex) => (
            <div
              key={rowIndex}
              className="flex text-xs font-normal text-gray-600 h-10 border-t"
            >
              <div
                className="px-6 h-full flex items-center text-blue-600 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("TRANSACTION ID", fakeTransactions, 0)}px`,
                }}
              >
                {item.transactionId}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("ORDER ID", fakeTransactions, 1)}px`,
                }}
              >
                {item.orderId}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("CUSTOMER NAME", fakeTransactions, 2)}px`,
                }}
              >
                {item.customerName}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("DATE", fakeTransactions, 3)}px`,
                }}
              >
                {item.date}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("AMOUNT", fakeTransactions, 4)}px`,
                }}
              >
                {item.amount}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("PAYMENT METHOD", fakeTransactions, 5)}px`,
                }}
              >
                <div
                  className={`flex items-center px-2 py-1 gap-1 rounded-xl ${item.paymentMethod.color} ${item.paymentMethod.bg}`}
                >
                  <item.paymentMethod.icon />
                  {item.paymentMethod.name}
                </div>
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("STATUS", fakeTransactions, 6)}px`,
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
                  width: `${getColumnWidth("INVOICE NUMBER", fakeTransactions, 7)}px`,
                }}
              >
                {item.invoiceNumber}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("NOTES", fakeTransactions, 8)}px`,
                }}
              >
                {item.notes}
              </div>
              <div
                className="px-6 h-full flex items-center gap-3 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("ACTIONS", fakeTransactions, 9)}px`,
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
        totalItems={fakeTransactions.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* Analytics Dashboard */}
      <div className="mt-6">
        <TransactionsMetricsSummary transactions={fakeTransactions} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PaymentMethodChart transactions={fakeTransactions} />
          <TransactionTrendChart transactions={fakeTransactions} />
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
        content = item.transactionId;
        break;
      case 1:
        content = item.orderId;
        break;
      case 2:
        content = item.customerName;
        break;
      case 3:
        content = item.date;
        break;
      case 4:
        content = item.amount;
        break;
      case 5:
        content = item.paymentMethod.name;
        break;
      case 6:
        content = item.status.name;
        break;
      case 7:
        content = item.invoiceNumber;
        break;
      case 8:
        content = item.notes;
        break;
      case 9:
        content = "Actions";
        break;
    }

    const contentWidth = content.toString().length * 8 + 32;
    if (contentWidth > maxContentWidth) maxContentWidth = contentWidth;
  });

  // Return the larger of header width or max content width
  return Math.max(headerWidth, maxContentWidth, 120); // Minimum width of 120px
}

export default Transactions;