import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaIdCard,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBuilding,
  FaShieldAlt,
  FaEdit,
} from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import UserActivityChart from "../Tools/profile/UserActivityChart";
import RecentActivities from "../Tools/profile/RecentActivities";
import { useSelector } from "react-redux";

const Profile = () => {
    const user1 = useSelector((state) => state.auth.user);
  // Sample user data
  const user = {
    name: "Mohamed El Amrani",
    position: "CEO",
    department: "Management",
    email: "m.elamrani@company.com",
    phone: "+212 600 112 233",
    employeeId: "EMP-2024-001",
    hireDate: "2018-06-15",
    location: "Casablanca, Morocco",
    bio: "Experienced executive with 15+ years in the glass and construction industry. Passionate about innovation and team development.",
    skills: ["Leadership", "Strategic Planning", "Business Development", "Team Management"],
    lastLogin: "2024-05-28 09:42",
    status: "Active",
    teamMembers: 12,
  };

  return (
    <div className="w-full h-[calc(100vh-180px)] overflow-y-auto pb-6">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Profile Card */}
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center mb-4 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: user1.employee.gender === "male" ? `url(./male.png)` : `url(./female.png)` }}>
              {/* <FaUser className="text-blue-500 text-5xl" /> */}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{user1.employee.name}</h2>
            <p className="text-blue-600 font-medium">{user1.employee.role}</p>
            <p className="text-gray-500 text-sm">{user1.employee.department}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-500">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium">{user1.employee.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100 text-green-500">
                <FaPhone />
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm font-medium">{user1.employee.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100 text-purple-500">
                <FaIdCard />
              </div>
              <div>
                <p className="text-xs text-gray-500">Employee ID</p>
                <p className="text-sm font-medium">{user1.employee.id}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-100 text-amber-500">
                <FaCalendarAlt />
              </div>
              <div>
                <p className="text-xs text-gray-500">Hire Date</p>
                <p className="text-sm font-medium">{user1.employee.hire_date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-100 text-red-500">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-sm font-medium">Casablanca</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-teal-100 text-teal-500">
                <FaShieldAlt />
              </div>
              <div>
                <p className="text-xs text-gray-500">Status</p>
                <p className="text-sm font-medium text-green-500">{user1.employee.status}</p>
              </div>
            </div>
          </div>
        </div>

        {/* User Details */}
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Profile Information</h2>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
              <FaEdit /> Edit Profile
            </button>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">About</h3>
            <p className="text-gray-600">{user.bio}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Security</h3>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gray-200 text-gray-600">
                  <MdPassword />
                </div>
                <div>
                  <p className="text-sm font-medium">Password</p>
                  <p className="text-xs text-gray-500">Last changed 3 months ago</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Change Password
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Recent Activity</h3>
            <RecentActivities />
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">User Activity</h3>
          <UserActivityChart />
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Team Structure</h3>
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <FaUser className="text-blue-500 text-3xl" />
              </div>
              <h4 className="font-medium">{user.name}</h4>
              <p className="text-sm text-gray-500 mb-6">{user.position}</p>
              
              <div className="flex justify-center">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="mx-2 text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-100 flex items-center justify-center">
                      <FaUser className="text-gray-500 text-xl" />
                    </div>
                    <p className="text-xs">Team Member {item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;