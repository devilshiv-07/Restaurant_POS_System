import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCustomer } from "../../redux/slices/customerSlice";
import Modal from "./Modal";

const BottomNav = () => {
  // Hooks
  // useLocation is used to get the current location
  const location = useLocation();
  // useNavigate is used to navigate to different routes
  const navigate = useNavigate();
  // useDispatch is used to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // State to manage the modal open and close
  // useState is used to manage the state of the component
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to manage the number of guests
  const [guestCount, setGuestCount] = useState(0);
  
  // Modal open and close handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // State to manage the customer name and phone
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  // State to manage the number of guests
  const increment = () => {
    if (guestCount >= 6) return;
    setGuestCount((count) => count + 1);
  };
  const decrement = () => {
    if (guestCount <= 0) return;
    setGuestCount((count) => count - 1);
  };

  // Function to check if the current path is active
  const isActive = path => location.pathname === path;

  const handleCreateOrder = () => {
    if (!name || !phone || guestCount <= 0) {
      alert("Please fill all the fields");
      return;
    }

    // Dispatch the action to set the customer details
    dispatch(setCustomer({ name, phone, guests: guestCount }));

    // Close the modal
    closeModal();

    // Navigate to the table page
    navigate("/tables");
  }

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
        className={`absolute bottom-8 bg-[#F6B100] text-[#f5f5f5] rounded-full p-2.5 ${isActive("/tables") || isActive("/menu") ? "" : "hover:bg-yellow-400 hover:scale-110 transition-all duration-200 ease-in-out"}`}
      >
        <BiSolidDish size={24} />
      </button>

      {/* Modal for creating order */}
      <Modal title="Create Order" isOpen={isModalOpen} onClose={closeModal}>
        {/* name entry */}
        <div>
          <label className="ml-1 block text-[#ababab] mb-2 text-sm font-medium mt-2">
            Customer Name
          </label>
          <div className="flex items-center rounded-full py-2 px-4 bg-[#1f1f1f]">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
          onClick={handleCreateOrder}
          className="w-full bg-[#f6b100] text-[#f5f5f5] rounded-full p-1 mt-6 hover:bg-yellow-600"
        >
          Create Order
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;
