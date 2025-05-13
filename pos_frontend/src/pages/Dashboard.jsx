import React from "react";
import { MdTableBar, MdCategory } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import { useState } from "react";
import Metrics from "../components/dashboard/Metrics"
import RecentOrders from "../components/dashboard/RecentOrders"
import Modal from "../components/dashboard/Modal";

const buttons = [
    { key:1, label: "Add Table", icon: <MdTableBar />, action: "table" },
    { key:2, label: "Add Category", icon: <MdCategory />, action: "category" },
    { key:3, label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
  ];

  const tabs = ["Metrics", "Orders", "Payments"];

const Dashboard = () => {
  
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Metrics")

  const handleOpenModal = (action) => {
    if(action === "table") setIsTableModalOpen(true)
  }

  return (
    <div className="bg-[#1f1f1f] h-[92vh] px-16">
      <div className="container flex items-center justify-between px-6  py-12 md:px-4">
        <div className="flex items-center gap-4">
          {buttons.map(({ key, label, icon, action }) => {
            return (
              <button onClick={() => handleOpenModal(action)} key={key} className="bg-[#1a1a1a] hover:bg-[#262626] px-8 py-3 rounded-xl text-[#f5f5f5] text-sm flex items-center gap-2"
              >
                {label} {icon}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          {tabs.map((tab, index) => {
            return (
              <button key={index} className={`px-8 py-3 rounded-lg text-[#f5f5f5] text-sm flex items-center gap-2 ${activeTab === tab ? "bg-[#262626]" : "bg-[#1a1a1a] hover:bg-[#262626]"}`}
              onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {activeTab === "Metrics" && <Metrics />}
      {activeTab === "Orders" && <RecentOrders />}

      {isTableModalOpen && <Modal setIsTableModalOpen={setIsTableModalOpen}/>}
    </div>
  );
};

export default Dashboard;
