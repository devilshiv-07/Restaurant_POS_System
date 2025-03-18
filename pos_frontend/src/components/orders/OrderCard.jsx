import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCart = () => {
  return (
    <div className="w-[360px] bg-[#262626] py-2 px-4 rounded-lg mb-4 mr-14">
      <div className="flex items-center gap-3">
        {/* user box */}
        <button className="bg-[#f6b100] p-1 text-md font-bold rounded-md">
          DS
        </button>

        {/* user Order */}
        <div className="flex items-center justify-between w-[100%]">
          {/* user and it's item count */}
          <div className="flex flex-col items-start">
            <h1 className="text-[#f5f5f5] text-sm font-semibold tracking-wide">
              Devilshiv
            </h1>
            <p className="text-[#ababab] text-xs">#101/ Dine in</p>
          </div>

          {/* Item ready or not */}
          <div className="flex flex-col items-end gap-2">
            <p className="text-green-600 text-sm bg-[#2e4a40] px-1.5 py-0.5 rounded-lg">
              <FaCheckDouble className="inline mr-2 text-xs" /> Ready
            </p>
            <p className="text-[#ababab] text-xs">
              <FaCircle className="inline mr-2 text-xs text-green-600" />Ready
              to serve
            </p>
          </div>
        </div>
      </div>

      {/* Order details */}
      <div className="flex justify-between items-center mt-4 text-[#ababab] text-xs">
        <p>March 18, 2025 20:24 PM</p>
        <p>8 Items</p>
      </div>

      <hr className="w-full mt-2 border-t-1 border-gray-500 text-[#ababab]" />

      {/* Total */}
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-[#f5f5f5] text-sm font-semibold">Total</h1>
        <p className="text-[#f5f5f5] text-xs font-semibold">₹ 250.00</p>
      </div>

    </div>
  );
};

export default OrderCart;
