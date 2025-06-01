import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiArrowDropDownLine,
  RiSettingsLine,
  RiLogoutCircleLine,
  RiDashboardLine,
  RiSearchLine,
  RiCloseLine,
  RiNotification3Line,
  RiAppsLine,
} from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FiActivity, FiPackage, FiUsers, FiUser, FiMenu } from "react-icons/fi";
import { GrStorage } from "react-icons/gr";
import { BsCurrencyExchange } from "react-icons/bs";
import { toggleSidebar } from "../../Store/Reducers/navSlice";
import { logout } from "../../Store/Reducers/Auth/authSlice";

const Navbar = () => {
  const [section, setSection] = useState("Overview");
  const [Psection, setPsection] = useState("");
  const [search, setSearch] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const unreadNotifications = 7;
  const [showQuickActions, setShowQuickActions] = useState(false);

  const profileRef = useRef(null);
  const quickActionsRef = useRef(null);
  useEffect(() => {
    const sections = {
      "/dashboard": "Overview",
      "/dashboard/orders": "Orders",
      "/dashboard/customers": "Customers",
      "/dashboard/products": "Products",
      "/dashboard/delivery": "Delivery",
      "/dashboard/analytics": "Analytics",
      "/dashboard/transactions": "Transactions",
      "/dashboard/team": "Team",
      "/dashboard/logistics": "Logistics",
      "/dashboard/inventory": "Inventory",
      "/dashboard/profile": "Profile",
    };

    setSection(sections[location.pathname] || "Overview");
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
      if (
        quickActionsRef.current &&
        !quickActionsRef.current.contains(event.target)
      ) {
        setShowQuickActions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const sectionCategory = {
      Dashboard: [
        "Overview",
        "Orders",
        "Customers",
        "Products",
        "Delivery",
        "Analytics",
        "Transactions",
      ],
      Management: ["Team", "Logistics", "Inventory"],
    };

    const category =
      Object.entries(sectionCategory).find(([_, sections]) =>
        sections.includes(section)
      )?.[0] || "Account";

    setPsection(category);
  }, [section]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const Effacer = () => {
    setSearch("");
  };

  const quickActions = [
    {
      icon: <RiDashboardLine />,
      label: "Overview",
      action: () => navigate("/dashboard"),
    },
    {
      icon: <BsCurrencyExchange />,
      label: "Transactions",
      action: () => navigate("/dashboard/transactions"),
    },
    {
      icon: <FiPackage />,
      label: "Add Product",
      action: () => navigate("/dashboard/products"),
    },
    {
      icon: <FiUsers />,
      label: "Invite User",
      action: () => navigate("/dashboard/team"),
    },
    {
      icon: <TbTruckDelivery />,
      label: "Delivery",
      action: () => navigate("/dashboard/delivery"),
    },
    {
      icon: <GrStorage />,
      label: "Inventory",
      action: () => navigate("/dashboard/inventory"),
    },
  ];

  return (
    <div className="w-full h-20 bg-white border-b-2 flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        {/* Sidebar Toggle */}
        <div>
          <FiMenu
            onClick={() => dispatch(toggleSidebar())}
            className="p-2 cursor-pointer"
            size={40}
          />
        </div>

        {/* Section Name with Breadcrumb and Icon */}
        <div className="flex items-center gap-2">
          {section === "Overview" && (
            <RiDashboardLine className="text-blue-500" />
          )}
          {section === "Orders" && <FiPackage className="text-green-500" />}
          {section === "Customers" && <FiUsers className="text-purple-500" />}
          {section === "Products" && <FiPackage className="text-yellow-500" />}
          {section === "Delivery" && (
            <TbTruckDelivery className="text-red-500" />
          )}
          {section === "Analytics" && (
            <FiActivity className="text-indigo-500" />
          )}
          {section === "Transactions" && (
            <BsCurrencyExchange className="text-green-500" />
          )}
          {section === "Team" && <FiUsers className="text-teal-500" />}
          {section === "Logistics" && (
            <TbTruckDelivery className="text-orange-500" />
          )}
          {section === "Inventory" && <GrStorage className="text-amber-500" />}
          {section === "Profile" && <FiUser className="text-cyan-500" />}

          <h1 className="text-lg font-semibold">{section}</h1>
          <span className="mx-1 text-gray-400">/</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">
            {Psection}
          </span>
        </div>
      </div>

      {/* Middle Section - Search */}
      <div className="hidden md:flex items-center relative mx-4 flex-1 max-w-xl">
        <div className="absolute left-3 text-gray-400 dark:text-gray-500">
          <RiSearchLine />
        </div>
        <input
          type="text"
          placeholder="Search for orders, products, customers..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary outline-none transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="absolute right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
          onClick={Effacer}
        >
          <RiCloseLine />
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* Quick Actions Button */}
        <div className="relative" ref={quickActionsRef}>
          <button
            onClick={() => setShowQuickActions(!showQuickActions)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <RiAppsLine size={20} />
          </button>

          <AnimatePresence>
            {showQuickActions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border dark:border-gray-700 overflow-hidden z-50"
              >
                <div className="p-3 border-b dark:border-gray-700">
                  <h3 className="font-semibold text-sm">Quick Actions</h3>
                </div>
                <div className="grid grid-cols-2 gap-1 p-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        action.action();
                        setShowQuickActions(false);
                      }}
                      className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex flex-col items-center gap-1 transition-colors duration-200"
                    >
                      <span className="text-xl">{action.icon}</span>
                      <span className="text-xs">{action.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Notifications */}
        <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 relative">
          <RiNotification3Line size={20} />
          {unreadNotifications > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1">
              {unreadNotifications}
            </span>
          )}
        </button>
        {/* Profile Dropdown */}
        {user && (
          <div className="relative" ref={profileRef}>
            <div
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-1 transition-colors duration-200"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              <div
                className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 bg-center bg-cover border border-gray-300 dark:border-gray-600 hover:border-primary transition-all duration-300"
                style={{ backgroundImage: user.employee.gender === "male" ? `url(./male.png)` : `url(./female.png)` }}
              ></div>
              <div className="hidden lg:block">
                <p className="text-sm font-medium capitalize">
                  {user.employee.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {user.employee.role}
                </p>
              </div>
              <RiArrowDropDownLine
                size={20}
                className={`transition-transform duration-200 ${
                  showProfileDropdown ? "rotate-180" : ""
                }`}
              />
            </div>

            <AnimatePresence>
              {showProfileDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border dark:border-gray-700 overflow-hidden z-50"
                >
                  <div className="p-4 border-b dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 bg-center bg-cover border border-gray-300 dark:border-gray-600 hover:border-primary"
                        style={{ backgroundImage: user.employee.gender === "male" ? `url(./male.png)` : `url(./female.png)` }}
                      ></div>
                      <div>
                        <p className="font-medium text-sm capitalize">
                          {user.employee.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {user.employee.email.length > 15
                            ? `${user.employee.email.substring(0, 21)}...`
                            : user.employee.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-1">
                    <button
                      className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm"
                      onClick={() => {
                        navigate("/dashboard/profile");
                        setShowProfileDropdown(false);
                      }}
                    >
                      <FiUser />
                      <span>Profile</span>
                    </button>
                    <button
                      className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm"
                      onClick={() => {
                        navigate("/dashboard/profile");
                        setShowProfileDropdown(false);
                      }}
                    >
                      <RiSettingsLine />
                      <span>Settings</span>
                    </button>
                  </div>
                  <div className="py-1 border-t dark:border-gray-700">
                    <button
                      className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm text-red-500"
                      onClick={handleLogout}
                    >
                      <RiLogoutCircleLine />
                      <span>Logout</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
