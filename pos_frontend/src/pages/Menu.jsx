import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";

const Menu = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left div */}
      <div className="flex-[3]">
        {/* Header of Left div */}
        <div className="flex items-center justify-between px-10 py-2 mt-2">
          {/* Menu Heading */}
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-xl font-bold tracking-wide">
              Menu
            </h1>
          </div>

          {/* Admin info and selected table */}
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <MdRestaurantMenu className="text-[#f5f5f5] text-2xl " />
              <div className="flex flex-col items-start">
                <h1 className="text-sm text-[#f5f5f5]  font-semibold">
                  Cumstomer Name
                </h1>
                <p className="text-xs text-[#ababab] font-medium">
                  Table No: 12
                </p>
              </div>
            </div>
          </div>
        </div>

        <MenuContainer />
      </div>

      {/* Right div */}
      <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[78vh] rounded-lg pt-2">

        {/* Customer Info */}
        <div className="flex items-center justify-between px-4 py-2 h-[15%]">

          {/* Customer name, table and date */}
          <div className="flex flex-col items-start">
            <h1 className="text-sm text-[#f5f5f5] font-semibold tracking-wide">
              Customer Name
            </h1>
            <p className="text-xs text-[#ababab] font-medium mt-1">
              #101/Dine in
            </p>
            <p className="text-xs text-[#ababab] font-medium mt-2">
              January 19, 2025 05:34 PM
            </p>
          </div>
          {/* Customer name as logo */}
          <button className="bg-[#f6b100] p-2 text-lg font-bold rounded-lg">
            CN
          </button>
        </div>

        {/* Separator line */}
        <hr className="border-[#2a2a2a] border-t-2 h-[2%]" />

        {/* Cart Item */}
        <div className="px-4 py- h-[71%]">
          <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">Order Details</h1>
          <div className="mt-2 overflow-y-scroll scrollHide h-[85%]">
            <h1 className="text-[#ababab] font-semibold tracking-wide text-sm">Dal Makhani</h1>
          </div>
        </div>
      </div>

      <BottomNav />
    </section>
  );
};

export default Menu;
