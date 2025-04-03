import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri"
import { FaNotesMedical } from "react-icons/fa6"

const CartInfo = () => {
  return (
    <div className="px-4 py-1 h-[51%]">
      <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
        Order Details
      </h1>
      <div className="mt-2 overflow-y-scroll scrollHide h-[85%]">
        <div className="bg-[#1f1f1f] rounded-lg px-4 py-2 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-[#ababab] font-semibold tracking-wide text-xs">
              Dal Makhani
            </h1>
            <p className="text-[#ababab] font-semibold text-xs">x2</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                className="text-[#ababab] cursor-pointer"
                size={14}
              />
              <FaNotesMedical
                className="text-[#ababab] cursor-pointer"
                size={12}
              />
            </div>
            <p className="text-[#f5f5f5] text-sm font-bold">₹123</p>
          </div>
        </div>

        <div className="bg-[#1f1f1f] rounded-lg px-4 py-2 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-[#ababab] font-semibold tracking-wide text-xs">
              Dal Makhani
            </h1>
            <p className="text-[#ababab] font-semibold text-xs">x2</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                className="text-[#ababab] cursor-pointer"
                size={14}
              />
              <FaNotesMedical
                className="text-[#ababab] cursor-pointer"
                size={12}
              />
            </div>
            <p className="text-[#f5f5f5] text-sm font-bold">₹123</p>
          </div>
        </div>

        <div className="bg-[#1f1f1f] rounded-lg px-4 py-2 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-[#ababab] font-semibold tracking-wide text-xs">
              Dal Makhani
            </h1>
            <p className="text-[#ababab] font-semibold text-xs">x2</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                className="text-[#ababab] cursor-pointer"
                size={14}
              />
              <FaNotesMedical
                className="text-[#ababab] cursor-pointer"
                size={12}
              />
            </div>
            <p className="text-[#f5f5f5] text-sm font-bold">₹123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
