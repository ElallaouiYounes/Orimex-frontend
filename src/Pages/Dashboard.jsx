import React, {useState} from "react";
import Sidebar from "../Components/Global/Sidebar";
import Content from "../Components/Global/Content";
import PoopUp from "../Components/Global/PoopUp";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const poopup = useSelector((state) => state.nav.poopup);

  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <Content />
      {poopup && <PoopUp />}
    </div>
  );
};

export default Dashboard;
