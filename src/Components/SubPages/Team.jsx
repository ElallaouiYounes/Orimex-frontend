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
import { useSelector } from "react-redux";

const Team = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const teamMembers = useSelector((state) => state.team.teamMembers);

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
              <th className="px-6 py-3 text-left whitespace-nowrap">
                EMPLOYEE ID
              </th>
              <th className="px-6 py-3 text-left min-w-[150px]">NAME</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">
                POSITION
              </th>
              <th className="px-6 py-3 text-left whitespace-nowrap">
                DEPARTMENT
              </th>
              <th className="px-6 py-3 text-left min-w-[180px]">CONTACT</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">
                HIRE DATE
              </th>
              <th className="px-6 py-3 text-left whitespace-nowrap">GENDER</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">STATUS</th>
              <th className="px-6 py-3 text-left whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {teamMembers.map((member, rowIndex) => (
              <tr
                key={rowIndex}
                className="text-xs font-normal text-gray-600 h-10"
              >
                <td className="px-6 py-3 whitespace-nowrap text-blue-600 font-semibold">
                  {member.id}
                </td>
                <td className="px-6 py-3 min-w-[150px]">{member.name}</td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {member.role}
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
                    {member.hire_date}
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
                    className={`flex items-center px-2 py-1 gap-1 rounded-xl ${member.status === "working" ? `text-green-500 bg-green-100` : member.status === "vacation" ? `text-amber-500 bg-amber-100` : `text-red-500 bg-red-100`}`}
                  >
                    {member.status}
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