import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Overview from "../SubPages/Overview";
import Orders from "../SubPages/Orders";
import Customers from "../SubPages/Customers";
import Products from "../SubPages/Products";
import Delivery from "../SubPages/Delivery";
import Charts from "../SubPages/Analytics";
import Team from "../SubPages/Team";
import Logistics from "../SubPages/Logistics";
import Inventory from "../SubPages/Inventory";
import Profile from "../SubPages/Profile";
import Transactions from "../SubPages/Transactions";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const Content = () => {
  const { isOpen } = useSelector((state) => state.nav);
  const location = useLocation();
  const date = new Date();
  const hour = date.getHours();
  const timeBasedGreeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div
      className={`h-screen ${
        isOpen ? "w-[calc(100%-13rem)]" : "w-[calc(100%)]"
      } bg-gray-50 fixed right-0 top-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100`}
    >
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="px-4 py-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium font-work text-gray-500 uppercase tracking-wider">
              {timeBasedGreeting}
            </p>
            <h1 className="text-lg font-work font-bold text-gray-800 flex items-center gap-2">
              Welcome back, Elallaoui Younes
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl"
              >
                👋
              </motion.span>
            </h1>
          </div>
        </div>

        {/* Animated Route Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <Routes>
              <Route path="" element={<Overview />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/products" element={<Products />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/analytics" element={<Charts />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/team" element={<Team />} />
              <Route path="/logistics" element={<Logistics />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Content;
