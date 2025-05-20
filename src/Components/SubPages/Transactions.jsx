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
      notes: "Final payment upon delivery",
    },
  ];

  return (
    <div className="w-full h-[calc(100vh-180px)] overflow-y-auto pb-6">
      {/* page header */}
      <ModernTransactionsHeader />

      {/* table container */}
      <div className="w-full overflow-x-auto border rounded-sm">
        <table className="min-w-full divide-y divide-gray-200">
          {/* table header */}
          <thead className="bg-gray-200/25">
            <tr className="text-xs font-medium font-inter text-black/70 h-10 tracking-wider">
              <th className="px-6 py-3 text-left whitespace-nowrap">TRANSACTION ID</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">ORDER ID</th>
              <th className="px-6 py-3 text-left min-w-[180px]">CUSTOMER NAME</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">DATE</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">AMOUNT</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">PAYMENT METHOD</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">STATUS</th>
              <th className="px-6 py-3 text-left min-w-[200px]">NOTES</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {fakeTransactions.map((item, rowIndex) => (
              <tr key={rowIndex} className="text-xs font-normal text-gray-600 h-10">
                <td className="px-6 py-3 whitespace-nowrap text-blue-600">
                  {item.transactionId}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {item.orderId}
                </td>
                <td className="px-6 py-3 min-w-[180px]">
                  {item.customerName}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {item.date}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {item.amount}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <div
                    className={`flex items-center px-2 py-1 gap-1 rounded-xl ${item.paymentMethod.color} ${item.paymentMethod.bg}`}
                  >
                    <item.paymentMethod.icon />
                    {item.paymentMethod.name}
                  </div>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <div
                    className={`flex items-center px-2 py-1 gap-1 rounded-xl ${item.status.color} ${item.status.bg}`}
                  >
                    <item.status.icon />
                    {item.status.name}
                  </div>
                </td>
                <td className="px-6 py-3 min-w-[200px]">
                  {item.notes}
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

export default Transactions;