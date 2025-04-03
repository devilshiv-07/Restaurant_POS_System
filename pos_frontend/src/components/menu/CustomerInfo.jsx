import React from "react";

const CustomerInfo = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 h-[15%]">
      {/* Customer name, table and date */}
      <div className="flex flex-col items-start">
        <h1 className="text-sm text-[#f5f5f5] font-semibold tracking-wide">
          Customer Name
        </h1>
        <p className="text-xs text-[#ababab] font-medium mt-1">#101/Dine in</p>
        <p className="text-xs text-[#ababab] font-medium mt-2">
          January 19, 2025 05:34 PM
        </p>
      </div>
      {/* Customer name as logo */}
      <button className="bg-[#f6b100] p-2 text-lg font-bold rounded-lg">
        CN
      </button>
    </div>
  );
};

export default CustomerInfo;
