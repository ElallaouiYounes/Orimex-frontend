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
      <div className="w-full overflow-x-auto whitespace-nowrap border rounded-sm">
        {/* table */}
        <div className="inline-block min-w-full">
          {/* table header */}
          <div className="flex text-xs font-medium font-inter h-10 tracking-wider bg-gray-200/25">
            {[
              "EMPLOYEE ID",
              "NAME",
              "POSITION",
              "DEPARTMENT",
              "CONTACT",
              "HIRE DATE",
              "GENDER",
              "STATUS",
              "ACTIONS",
            ].map((header, index) => (
              <div
                key={index}
                className="px-6 h-full hover:bg-gray-200/40 flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth(header, teamMembers, index)}px`,
                }}
              >
                {header}
              </div>
            ))}
          </div>

          {/* table content */}
          {teamMembers.map((member, rowIndex) => (
            <div
              key={rowIndex}
              className="flex text-xs font-normal text-gray-600 h-10 border-t"
            >
              <div
                className="px-6 h-full flex items-center text-blue-600 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("EMPLOYEE ID", teamMembers, 0)}px`,
                }}
              >
                {member.id}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("NAME", teamMembers, 1)}px`,
                }}
              >
                {member.name}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("POSITION", teamMembers, 2)}px`,
                }}
              >
                {member.position}
              </div>
              <div
                className="px-6 h-full flex items-center gap-2 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("DEPARTMENT", teamMembers, 3)}px`,
                }}
              >
                {member.department}
              </div>
              <div
                className="px-6 h-full flex flex-col justify-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("CONTACT", teamMembers, 4)}px`,
                }}
              >
                <div className="flex items-center gap-1">
                  <FaPhone className="text-gray-400 text-xs" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaEnvelope className="text-gray-400 text-xs" />
                  <span>{member.email}</span>
                </div>
              </div>
              <div
                className="px-6 h-full flex items-center gap-1 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("HIRE DATE", teamMembers, 5)}px`,
                }}
              >
                <FaCalendarAlt className="text-gray-400 text-xs" />
                {member.hireDate}
              </div>
              <div
                className="px-6 h-full flex items-center gap-1 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("GENDER", teamMembers, 6)}px`,
                }}
              >
                <FaVenusMars className="text-gray-400 text-xs" />
                {member.gender}
              </div>
              <div
                className="px-6 h-full flex items-center flex-shrink-0"
                style={{
                  width: `${getColumnWidth("STATUS", teamMembers, 7)}px`,
                }}
              >
                <div
                  className={`flex items-center px-2 py-1 gap-1 rounded-xl ${member.status.color} ${member.status.bg}`}
                >
                  {member.status.name}
                </div>
              </div>
              <div
                className="px-6 h-full flex items-center gap-3 flex-shrink-0"
                style={{
                  width: `${getColumnWidth("ACTIONS", teamMembers, 8)}px`,
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
        content = item.id;
        break;
      case 1:
        content = item.name;
        break;
      case 2:
        content = item.position;
        break;
      case 3:
        content = item.department;
        break;
      case 4:
        content = item.phone + item.email;
        break;
      case 5:
        content = item.hireDate;
        break;
      case 6:
        content = item.gender;
        break;
      case 7:
        content = item.status.name;
        break;
      case 8:
        content = "Actions";
        break;
    }

    const contentWidth = content.toString().length * 8 + 32;
    if (contentWidth > maxContentWidth) maxContentWidth = contentWidth;
  });

  // Return the larger of header width or max content width
  return Math.max(headerWidth, maxContentWidth, 120); // Minimum width of 120px
}

export default Team;