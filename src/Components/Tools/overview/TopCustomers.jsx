import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";

const TopCustomers = () => {
  const fakeCustomers = [
    {
      customerId: "CUST-2024-001",
      name: "Casablanca Tower Contractors",
      contactPerson: "Ahmed Benali",
      email: "ahmed.benali@casatower.com",
      phone: "+212 600 123 456",
      companyType: "Construction",
      location: "Casablanca",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 15,
      lastOrderDate: "2024-05-15",
      totalSpent: "245,000 MAD",
    },
    {
      customerId: "CUST-2024-002",
      name: "Marrakech Glass Solutions",
      contactPerson: "Fatima Zahra",
      email: "fzahra@marrakechglass.ma",
      phone: "+212 700 234 567",
      companyType: "Glass Supplier",
      location: "Marrakech",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 8,
      lastOrderDate: "2024-05-18",
      totalSpent: "120,500 MAD",
    },
    {
      customerId: "CUST-2024-003",
      name: "Rabat Architectural Glass",
      contactPerson: "Karim El Mansouri",
      email: "k.mansouri@raglass.com",
      phone: "+212 650 345 678",
      companyType: "Architecture Firm",
      location: "Rabat",
      status: {
        name: "Pending Approval",
        icon: FaClock,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
      orders: 0,
      lastOrderDate: "N/A",
      totalSpent: "0 MAD",
    },
    {
      customerId: "CUST-2024-004",
      name: "Tangier Mirror Works",
      contactPerson: "Youssef Amrani",
      email: "y.amrani@tangmirror.com",
      phone: "+212 610 456 789",
      companyType: "Manufacturer",
      location: "Tangier",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 22,
      lastOrderDate: "2024-05-22",
      totalSpent: "387,200 MAD",
    },
    {
      customerId: "CUST-2024-005",
      name: "Fes Polycarbonate Ltd",
      contactPerson: "Leila Berrada",
      email: "l.berrada@fespoly.com",
      phone: "+212 660 567 890",
      companyType: "Distributor",
      location: "Fes",
      status: {
        name: "Inactive",
        icon: FaTimesCircle,
        color: "text-red-500",
        bg: "bg-red-100",
      },
      orders: 3,
      lastOrderDate: "2024-03-10",
      totalSpent: "45,000 MAD",
    },
    {
      customerId: "CUST-2024-006",
      name: "Oujda Glass Distributors",
      contactPerson: "Hassan Chraibi",
      email: "h.chraibi@oujdaglass.ma",
      phone: "+212 670 678 901",
      companyType: "Wholesaler",
      location: "Oujda",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 12,
      lastOrderDate: "2024-05-05",
      totalSpent: "178,750 MAD",
    },
    {
      customerId: "CUST-2024-007",
      name: "Agadir Aluminum Systems",
      contactPerson: "Nadia El Fassi",
      email: "nadia.elfassi@agadiral.com",
      phone: "+212 680 789 012",
      companyType: "Construction",
      location: "Agadir",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 18,
      lastOrderDate: "2024-05-25",
      totalSpent: "312,400 MAD",
    },
    {
      customerId: "CUST-2024-008",
      name: "Meknes Glass Innovations",
      contactPerson: "Omar Touimi",
      email: "o.touimi@meknesglass.com",
      phone: "+212 690 890 123",
      companyType: "Glass Fabricator",
      location: "Meknes",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 9,
      lastOrderDate: "2024-05-28",
      totalSpent: "156,800 MAD",
    },
    {
      customerId: "CUST-2024-009",
      name: "Kenitra Window Solutions",
      contactPerson: "Samira Belhaj",
      email: "s.belhaj@kenitrawindows.com",
      phone: "+212 700 901 234",
      companyType: "Window Installer",
      location: "Kenitra",
      status: {
        name: "Pending Approval",
        icon: FaClock,
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
      orders: 0,
      lastOrderDate: "N/A",
      totalSpent: "0 MAD",
    },
    {
      customerId: "CUST-2024-010",
      name: "El Jadida Mirror Art",
      contactPerson: "Khalid Bennis",
      email: "k.bennis@jadidamirror.com",
      phone: "+212 710 012 345",
      companyType: "Artisan",
      location: "El Jadida",
      status: {
        name: "Active",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
      },
      orders: 5,
      lastOrderDate: "2024-06-02",
      totalSpent: "89,300 MAD",
    },
  ];

  // Sort customers by total spent (convert string to number for comparison)
  const sortedCustomers = [...fakeCustomers].sort((a, b) => {
    const aAmount = parseFloat(a.totalSpent.replace(/[^0-9.]/g, ''));
    const bAmount = parseFloat(b.totalSpent.replace(/[^0-9.]/g, ''));
    return bAmount - aAmount;
  });

  // Get top 6 customers
  const topCustomers = sortedCustomers.slice(0, 5);

  // Circle colors for avatar backgrounds
  const circleColors = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-teal-500",
    "bg-indigo-500",
  ];

  // Extract initials from company name
  const getInitials = (name) => {
    const words = name.split(' ');
    let initials = '';
    for (let i = 0; i < Math.min(2, words.length); i++) {
      if (words[i].length > 0) {
        initials += words[i][0].toUpperCase();
      }
    }
    return initials;
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Customers</h2>
      
      <div className="space-y-4">
        {topCustomers.map((customer, index) => (
          <motion.div
            key={customer.customerId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
          >
            <div className={`flex-shrink-0 w-10 h-10 rounded-full ${circleColors[index]} flex items-center justify-center text-white font-medium`}>
              {getInitials(customer.name)}
            </div>
            
            <div className="ml-3 flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{customer.name}</p>
              <div className="flex items-center">
                <span className={`text-xs px-2 py-1 rounded-full ${customer.status.bg} ${customer.status.color} flex items-center`}>
                  <customer.status.icon className="mr-1" size={12} />
                  {customer.status.name}
                </span>
              </div>
            </div>
            
            <div className="ml-2 text-right">
              <p className="text-sm font-semibold text-gray-900">{customer.totalSpent}</p>
              <p className="text-xs text-gray-500">{customer.orders} orders</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopCustomers;