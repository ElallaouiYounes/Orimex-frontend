import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaVenusMars,
  FaEye,
} from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import ModernTeamHeader from "../Tools/team/ModernTeamHeader";
import TeamMetricsSummary from "../Tools/team/TeamMetricsSummary";
import DepartmentDistributionChart from "../Tools/team/DepartmentDistributionChart";
import EmployeeStatusChart from "../Tools/team/EmployeeStatusChart";
import Pagination from "../Global/Pagination";

const Team = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const teamMembers = [
    {
      id: "EMP-2024-001",
      name: "Mohamed El Amrani",
      position: "CEO",
      department: "Management",
      email: "m.elamrani@company.com",
      phone: "+212 600 112 233",
      hireDate: "2018-06-15",
      gender: "Male",
      status: {
        name: "Active",
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      id: "EMP-2024-002",
      name: "Fatima Zahra Belhaj",
      position: "HR Manager",
      department: "HR",
      email: "fz.belhaj@company.com",
      phone: "+212 700 223 344",
      hireDate: "2019-03-10",
      gender: "Female",
      status: {
        name: "Active",
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      id: "EMP-2024-003",
      name: "Karim Touimi",
      position: "Marketing Director",
      department: "Marketing",
      email: "k.touimi@company.com",
      phone: "+212 650 334 455",
      hireDate: "2020-01-20",
      gender: "Male",
      status: {
        name: "Active",
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      id: "EMP-2024-004",
      name: "Samira Chraibi",
      position: "Sales Manager",
      department: "Sales",
      email: "s.chraibi@company.com",
      phone: "+212 610 445 566",
      hireDate: "2019-11-05",
      gender: "Female",
      status: {
        name: "On Leave",
        color: "text-amber-500",
        bg: "bg-amber-100",
      },
    },
    {
      id: "EMP-2024-005",
      name: "Youssef Bennis",
      position: "Lead Developer",
      department: "Technology",
      email: "y.bennis@company.com",
      phone: "+212 660 556 677",
      hireDate: "2020-05-15",
      gender: "Male",
      status: {
        name: "Active",
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      id: "EMP-2024-006",
      name: "Leila El Fassi",
      position: "UX Designer",
      department: "Technology",
      email: "l.elfassi@company.com",
      phone: "+212 700 667 788",
      hireDate: "2021-02-28",
      gender: "Female",
      status: {
        name: "Active",
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      id: "EMP-2024-007",
      name: "Hassan Amrani",
      position: "Lead Driver",
      department: "Logistics",
      email: "h.amrani@company.com",
      phone: "+212 680 778 899",
      hireDate: "2019-08-12",
      gender: "Male",
      status: {
        name: "Active",
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      id: "EMP-2024-008",
      name: "Nadia Berrada",
      position: "Security Supervisor",
      department: "Security",
      email: "n.berrada@company.com",
      phone: "+212 690 889 900",
      hireDate: "2020-07-22",
      gender: "Female",
      status: {
        name: "Active",
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      id: "EMP-2024-009",
      name: "Omar Zahra",
      position: "CFO",
      department: "Finance",
      email: "o.zahra@company.com",
      phone: "+212 600 990 011",
      hireDate: "2018-09-30",
      gender: "Male",
      status: {
        name: "Active",
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      id: "EMP-2024-010",
      name: "Amina El Mansouri",
      position: "Accountant",
      department: "Finance",
      email: "a.elmansouri@company.com",
      phone: "+212 710 001 122",
      hireDate: "2021-04-18",
      gender: "Female",
      status: {
        name: "Probation",
        color: "text-blue-500",
        bg: "bg-blue-100",
      },
    },
    {
      id: "EMP-2024-011",
      name: "Khalid Touimi",
      position: "IT Support",
      department: "Technology",
      email: "k.touimi@company.com",
      phone: "+212 650 112 233",
      hireDate: "2022-01-05",
      gender: "Male",
      status: {
        name: "Active",
        color: "text-green-500",
        bg: "bg-green-100",
      },
    },
    {
      id: "EMP-2024-012",
      name: "Yasmina Chraibi",
      position: "Sales Representative",
      department: "Sales",
      email: "y.chraibi@company.com",
      phone: "+212 610 223 344",
      hireDate: "2021-11-15",
      gender: "Female",
      status: {
        name: "Inactive",
        color: "text-red-500",
        bg: "bg-red-100",
      },
    },
  ];

return (
    <div className="w-full h-[calc(100vh-180px)] overflow-y-auto pb-6">
      {/* page header */}
      <ModernTeamHeader />

      {/* table container */}
      <div className="w-full overflow-x-auto border rounded-sm">
        <table className="min-w-full divide-y divide-gray-200">
          {/* table header */}
          <thead className="bg-gray-200/25">
            <tr className="text-xs font-medium font-inter text-black/70 h-10 tracking-wider">
              <th className="px-6 py-3 text-left whitespace-nowrap">EMPLOYEE ID</th>
              <th className="px-6 py-3 text-left min-w-[150px]">NAME</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">POSITION</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">DEPARTMENT</th>
              <th className="px-6 py-3 text-left min-w-[180px]">CONTACT</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">HIRE DATE</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">GENDER</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">STATUS</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {teamMembers.map((member, rowIndex) => (
              <tr key={rowIndex} className="text-xs font-normal text-gray-600 h-10">
                <td className="px-6 py-3 whitespace-nowrap text-blue-600">
                  {member.id}
                </td>
                <td className="px-6 py-3 min-w-[150px]">
                  {member.name}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {member.position}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {member.department}
                </td>
                <td className="px-6 py-3 min-w-[180px]">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <FaPhone className="text-gray-400 text-xs" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaEnvelope className="text-gray-400 text-xs" />
                      <span>{member.email}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-gray-400 text-xs" />
                    {member.hireDate}
                  </div>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <FaVenusMars className="text-gray-400 text-xs" />
                    {member.gender}
                  </div>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <div
                    className={`flex items-center px-2 py-1 gap-1 rounded-xl ${member.status.color} ${member.status.bg}`}
                  >
                    {member.status.name}
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
        totalItems={teamMembers.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* Analytics Dashboard */}
      <div className="mt-6">
        <TeamMetricsSummary team={teamMembers} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DepartmentDistributionChart team={teamMembers} />
          <EmployeeStatusChart team={teamMembers} />
        </div>
      </div>
    </div>
  );
};

export default Team;