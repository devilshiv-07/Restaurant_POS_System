import React, { useState } from "react";
import { menus } from "../../constants/index";
import { GrRadialSelected } from "react-icons/gr";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);

  return (
    <>
      {/* Main menu container */}
      <div className="grid grid-cols-4 gap-3 px-10 py-4 w-[100%]">
        {menus.map((menu) => (
          // Menu items div
          <div
            key={menu.id}
            onClick={() => setSelected(menu)}
            className="flex flex-col items-start justify-between px-4 py-2 rounded-lg h-[65px] cursor-pointer"
            style={{ backgroundColor: menu.bgColor }}
          >
            {/* Items div */}
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#f5f5f5] text-sm font-thin tracking-wide">
                {menu.icon} {menu.name}
              </h1>
              {selected.id === menu.id && (
                <GrRadialSelected className="text-white" size={12} />
              )}
            </div>
            <p className="text-[#ababab] text-xs font-thin tracking-wide">
              {menu.items.length} Items
            </p>
          </div>
        ))}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 mx-10 mt-4" />

      {/* Dishes menu container */}
      <div className="grid grid-cols-4 gap-3 px-10 py-4 w-[100%]">
        {selected?.items.map((menu) => (
          // Dishes div
          <div
            key={menu.id}
            onClick={() => setSelected(menu)}
            className="flex flex-col items-start justify-between px-4 py-2 rounded-lg h-[70px] cursor-pointer bg-[#1a1a1a] hover:bg-[#2a2a2a]"
          >
            {/* Items div */}
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#f5f5f5] text-sm font-thin tracking-wide">
                {menu.icon} {menu.name}
              </h1>
              {selected.id === menu.id && (
                <GrRadialSelected className="text-white" size={12} />
              )}
            </div>
            <p className="text-[#ababab] text-xs font-thin tracking-wide">
              {menu.items.length} Items
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuContainer;
