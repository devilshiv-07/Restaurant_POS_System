import React from "react";
import { getTotalPrice } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";

const Bill = () => {

  const cartData = useSelector((state) => state.cart);

  // Function to calculate the total price
  const total = useSelector(getTotalPrice);
  const tax = (total * 5.25) / 100;
  const grandTotal = total + tax;
  const roundedTotal = Math.round(grandTotal);

  return (
    <div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium">Items({cartData.length})</p>
        <h1 className="text-[#f5f5f5] text-xs font-bold">₹ {total.toFixed(2)}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium">Tax(5.25%)</p>
        <h1 className="text-[#f5f5f5] text-xs font-bold">₹ {tax.toFixed(2)}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium">Total with Tax</p>
        <h1 className="text-[#f5f5f5] text-xs font-bold">₹ {roundedTotal.toFixed(2)}</h1>
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
