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
                <p className="text-xs text-[#ababab] font-medium">Table No: 12</p>
              </div>
            </div>
          </div>
        </div>

        <MenuContainer />
      </div>

      {/* Right div */}
      <div className="flex-[1] bg-blue-500"></div>

      <BottomNav />
    </section>
  );
};

export default Menu;
