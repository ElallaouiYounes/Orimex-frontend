import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  PieChart,
  ClipboardList,
  LogOut,
  Users,
  User,
} from "lucide-react";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillProduct } from "react-icons/ai";
import { GrStorage } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../Store/Reducers/Auth/authSlice";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.nav.isOpen);
  // const { user } = useSelector((state) => state.auth);
  const user = {};
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSections, setOpenSections] = useState({
    Dashboard: true,
    Management: true,
    Account: true,
  });

  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section],
    });
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const Sections = {
    Dashboard: [
      { name: "Overview", url: "/dashboard", icon: PieChart },
      { name: "Orders", url: "/dashboard/orders", icon: ClipboardList },
      { name: "Customers", url: "/dashboard/customers", icon: Users },
      { name: "Products", url: "/dashboard/products", icon: AiFillProduct },
      { name: "Delivery", url: "/dashboard/delivery", icon: TbTruckDelivery },
      { name: "Analytics", url: "/dashboard/analytics", icon: FaChartBar },
      {
        name: "Transactions",
        url: "/dashboard/transactions",
        icon: BsCurrencyExchange,
      },
    ],
    Management: [
      { name: "Team", url: "/dashboard/team", icon: Users },
      { name: "Logistics", url: "/dashboard/logistics", icon: TbTruckDelivery },
      { name: "Inventory", url: "/dashboard/inventory", icon: GrStorage },
    ],
    Account: [{ name: "Profile", url: "/dashboard/profile", icon: User }],
  };

  return (
    <div
      className={`h-screen border-r border-gray-200 fixed top-0 left-0 flex flex-col bg-white shadow-sm transition-all duration-300 ease-in-out z-50 ${
        isOpen ? "w-52 opacity-100 block" : "hidden opacity-0 -translate-x-full"
      }`}
    >
      {/* LOGO */}
      <div className="flex items-center py-5 border-b border-gray-100 px-4 gap-1 font-work font-semibold text-lg">
        <img src="./loggo.png" className="w-10" alt="" />
        <h1>ORIMEX S.A</h1>
      </div>

      {/* MENU */}
      <div className="flex-1 w-full py-4 overflow-y-auto">
        {Object.entries(Sections).map(([sectionName, items]) => (
          <div key={sectionName} className="w-full mb-2 px-3">
            <div
              className="flex items-center justify-between text-gray-600 px-2 py-2 cursor-pointer rounded-md hover:bg-gray-50"
              onClick={() => toggleSection(sectionName)}
            >
              <p className="text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                {sectionName}
              </p>
              {openSections[sectionName] ? (
                <ChevronDown size={14} className="text-gray-500" />
              ) : (
                <ChevronRight size={14} className="text-gray-500" />
              )}
            </div>

            {openSections[sectionName] && (
              <div className="mt-1 pl-2 transition-all duration-300 ease-in-out">
                {items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    className={`w-full flex items-center gap-3 font-medium text-xs cursor-pointer transition-all duration-150 ease-in-out rounded-md px-3 py-2.5 my-0.5 ${
                      location.pathname === item.url
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon
                      size={15}
                      className={
                        location.pathname === item.url
                          ? "text-indigo-600"
                          : "text-gray-500"
                      }
                    />
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                ))}
                {sectionName === "Account" && (
                  <div
                    className="w-full flex items-center gap-3 font-medium text-xs text-red-500 hover:bg-red-50 transition-all duration-150 ease-in-out cursor-pointer rounded-md px-3 py-2.5 my-0.5"
                    role="button"
                    tabIndex={0}
                    aria-label="Logout"
                    onClick={handleLogout}
                  >
                    <LogOut
                      size={15}
                      className="text-red-500"
                      aria-hidden="true"
                    />
                    <span className="whitespace-nowrap">Logout</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* USER PROFILE */}
      <div className="border-t border-gray-100 mt-auto">
        <div className="p-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <User size={14} className="text-indigo-700" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-800 whitespace-nowrap">
              {user.fullname}
            </span>
            <span className="text-xs text-gray-500 whitespace-nowrap">
              {user.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
