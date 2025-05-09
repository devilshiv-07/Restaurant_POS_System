import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "./Modal";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const increment = () => {
    if (guestCount >= 6) return;
    setGuestCount((count) => count + 1);
  };
  const decrement = () => {
    if (guestCount <= 0) return;
    setGuestCount((count) => count - 1);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-[7vh] flex justify-around">
      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className={`flex justify-center text-sm items-center w-[150px] rounded-full
        ${isActive("/") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"}`}
      >
        <FaHome className="inline mr-4" size={20} />
        <p>Home</p>
      </button>

      {/* Order Page */}
      <button
        onClick={() => navigate("/orders")}
        className={`flex justify-center text-sm items-center w-[150px] rounded-full
          ${isActive("/orders") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"}`}
      >
        <MdOutlineReorder className="inline mr-4" size={20} />
        <p>Orders</p>
      </button>

      {/* Tables Page */}
      <button
        onClick={() => navigate("/tables")}
        className={`flex justify-center text-sm items-center w-[150px] rounded-full
          ${isActive("/tables") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"}`}
      >
        <MdTableBar className="inline mr-4" size={20} />
        <p>Tables</p>
      </button>

      {/* More Option */}
      <button className="flex justify-center text-sm items-center text-[#f5f5f5] w-[200px] rounded-[25px]">
        <CiCircleMore className="inline mr-4" size={20} />
        <p>More</p>
      </button>

      {/* Order Button */}
      <button
        disabled={isActive("/tables") || isActive("/menu")}
        onClick={openModal}
        className="absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-2"
      >
        <BiSolidDish size={20} />
      </button>

      <Modal title="Create Order" isOpen={isModalOpen} onClose={closeModal}>
        {/* name entry */}
        <div>
          <label className="ml-1 block text-[#ababab] mb-2 text-sm font-medium mt-2">
            Customer Name
          </label>
          <div className="flex items-center rounded-full py-2 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name=""
              placeholder="Enter cumtomer name"
              id=""
              className="bg-transparent flex-1 text-white text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* phone detail */}
        <div>
          <label className="ml-1 block text-[#ababab] mb-2 text-sm font-medium mt-4">
            Customer Phone
          </label>
          <div className="flex items-center rounded-full py-2 px-4 bg-[#1f1f1f]">
            <input
              type="number"
              name=""
              placeholder="+91-9999999999"
              id=""
              className="bg-transparent flex-1 text-white text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* No of people */}
        <div>
          <label className="ml-1 block text-[#ababab] mb-2 text-sm font-medium mt-4">
            Number of guests
          </label>
          <div className="flex items-center justify-between rounded-full px-4 py-1 bg-[#1f1f1f] text-sm">
            <button onClick={decrement} className="text-yellow-500 text-lg">
              &minus;
            </button>
            <span className="text-white">{guestCount} Person</span>
            <button onClick={increment} className="text-yellow-500 text-lg">
              &#43;
            </button>
          </div>
        </div>

        {/* Submit button */}
        <button
          onClick={() => navigate("/tables")}
          className="w-full bg-[#f6b100] text-[#f5f5f5] rounded-full p-1 mt-6 hover:bg-yellow-600"
        >
          Create Order
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;
