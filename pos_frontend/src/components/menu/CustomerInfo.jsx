import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatDate, getAvatarName } from "../../utils";

const CustomerInfo = () => {

  const [date, setDate] = useState(new Date());

  const customerData = useSelector(state => state.customer)
  const { customerName } = customerData;
  const customerNameDisplay = customerName ? customerName : "Customer Name";
  const customerAvatar = getAvatarName(customerNameDisplay);
  const customerId = customerData.OrderId;
  const customerIdDisplay = customerId ? customerId : "N/A";

  return (
    <div className="flex items-center justify-between px-4 py-2 h-[15%]">
      {/* Customer name, table and date */}
      <div className="flex flex-col items-start">
        <h1 className="text-sm text-[#f5f5f5] font-semibold tracking-wide">
          {customerNameDisplay}
        </h1>
        <p className="text-xs text-[#ababab] font-medium mt-1">#{customerIdDisplay} / Dine in</p>
        <p className="text-xs text-[#ababab] font-medium mt-2">
          {formatDate(date)}
        </p>
      </div>
      {/* Customer name as logo */}
      <button className="bg-[#f6b100] p-2 text-lg font-bold rounded-lg">
        {customerAvatar}
      </button>
    </div>
  );
};

export default CustomerInfo;
