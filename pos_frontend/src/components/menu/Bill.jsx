import React from "react";

const Bill = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium">Items(4)</p>
        <h1 className="text-[#f5f5f5] text-sm font-bold">₹240</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium">Tax(5.25%)</p>
        <h1 className="text-[#f5f5f5] text-sm font-bold">₹24</h1>
      </div>
      <div className="flex items-center gap-3 px-5 mt-3">
        <button className="bg-[#1f1f1f] px-2 py-2 w-full rounded-lg text-[#ababab] font-semibold text-xs">Cash</button>
        <button className="bg-[#1f1f1f] px-2 py-2 w-full rounded-lg text-[#ababab] font-semibold text-xs">Online</button>
      </div>
      <div className="flex items-center gap-3 px-5 mt-3">
        <button className="bg-[#025cca] px-4 py-2 w-full rounded-lg text-[#f5f5f5] font-semibold text-xs">Print Receipt</button>
        <button className="bg-[#f6b100] px-4 py-2 w-full rounded-lg text-[#1f1f1f] font-semibold text-xs">Place Order</button>
      </div>
    </div>
  );
};

export default Bill;
