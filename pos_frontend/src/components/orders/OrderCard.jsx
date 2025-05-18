import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";
import { getAvatarName, formatDateAndTime } from "../../utils/index";

const OrderCart = ({ order }) => {
  return (
    <div className="w-[400px] bg-[#262626] py-2 px-4 rounded-lg h-[28%]">
      <div className="flex items-center gap-3">
        {/* user box */}
        <button className="bg-[#f6b100] p-1 text-md font-bold rounded-md">
          {getAvatarName(order.customerDetails.name)}
        </button>

        {/* user Order */}
        <div className="flex items-center justify-between w-[100%]">
          {/* user and it's item count */}
          <div className="flex flex-col items-start">
            <h1 className="text-[#f5f5f5] text-sm font-semibold tracking-wide">
              {order.customerDetails.name}
            </h1>
            <p className="text-[#ababab] text-xs">#{Math.floor(new Date(order.orderDate).getTime())}/ Dine in</p>
             <p className="text-[#ababab] text-xs">Table: {order.table.tableNo}</p>
          </div>

          {/* Item ready or not */}
          <div className="flex flex-col items-end gap-2">
            {order.orderStatus === "Ready" ? (
              <>
                <p className="text-green-600 text-sm bg-[#2e4a40] px-1.5 py-0.5 rounded-lg">
                  <FaCheckDouble className="inline mr-2 text-xs" />{" "}
                  {order.orderStatus}
                </p>
                <p className="text-[#ababab] text-xs">
                  <FaCircle className="inline mr-2 text-xs text-green-600" />
                  Ready to serve
                </p>
              </>
            ) : (
              <>
                <p className="text-yellow-600 text-sm bg-[#4a452e] px-1.5 py-0.5 rounded-lg">
                  <FaCheckDouble className="inline mr-2 text-xs" />{" "}
                  {order.orderStatus}
                </p>
                <p className="text-[#ababab] text-xs">
                  <FaCircle className="inline mr-2 text-xs text-yellow-600" />
                  Preparing order
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Order details */}
      <div className="flex justify-between items-center mt-4 text-[#ababab] text-xs">
        <p>{formatDateAndTime(order.createdAt)}</p>
        <p>{order.items.length} Items</p>
      </div>

      <hr className="w-full mt-2 border-t-1 border-gray-500 text-[#ababab]" />

      {/* Total */}
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-[#f5f5f5] text-sm font-semibold">Total</h1>
        <p className="text-[#f5f5f5] text-xs font-semibold">₹ {order.bills.totalWithTax}</p>
      </div>
    </div>
  );
};

export default OrderCart;
