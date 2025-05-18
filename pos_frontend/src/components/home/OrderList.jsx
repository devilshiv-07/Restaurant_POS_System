import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";
import { getAvatarName } from "../../utils/index";

const OrderList = ({ order }) => {
  return (
    <div className="flex items-center gap-5 mb-2">
      {/* user box */}
      <button className="bg-[#f6b100] p-1.5 text-sm tracking-tighter font-bold rounded-lg">
        {getAvatarName(order.customerDetails.name)}
      </button>

      {/* user Order */}
      <div className="flex items-center justify-between w-[100%]">
        {/* user and it's item count */}
        <div className="flex flex-col items-start">
          <h1 className="text-[#f5f5f5] text-sm font-semibold tracking-wide">
            {order.customerDetails.name}
          </h1>
          <p className="text-[#ababab] text-xs">{order.items.length} Items</p>
        </div>

        {/* Booked Table no. */}
        <div>
          <h1 className="text-[#f6b100] font-medium border border-[#f6b100] p-1 text-sm rounded-lg">
            Table No: {order.table.tableNo}
          </h1>
        </div>

        {/* Item ready or not */}
        <div className="flex flex-col items-end">
          {order.orderStatus === "Ready" ? (
            <>
              <p className="text-green-600 text-sm bg-[#2e4a40] px-1.5 py-0.5 rounded-lg">
                <FaCheckDouble className="inline mr-2 text-xs" />{" "}
                {order.orderStatus}
              </p>
            </>
          ) : (
            <>
              <p className="text-yellow-600 text-sm bg-[#4a452e] px-1.5 py-0.5 rounded-lg">
                <FaCircle className="inline mr-2 text-xs" />{" "}
                {order.orderStatus}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
