import React from "react";
import { getBgColor } from '../../utils/index'

const TableCard = ({name, status, seats, initial}) => {
  return (
    <div className="w-[225px] bg-[#262626] py-2 px-4 rounded-lg h-[27%] cursor-pointer mr-2 hover:bg-[#2e2e2e]">

      {/* Table No. and Book detail */}
      <div className="flex items-center justify-between">

        {/* Table no. */}
        <h1 className="text-[#c4c0c0] font-semibold">{name}</h1>

        {/* Info of booked or vacant */}
        <p className={`${ status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "text-[#ffc32b]  bg-[#dab71950]"} text-sm px-1.5 py-0.5 rounded-lg`}>{status}
        </p>
      </div>

      {/* User name logo */}
      <div className="flex items-center justify-center mt-4">
        <h1 className="font-bold text-white rounded-full p-2" style={{backgroundColor : initial ? getBgColor() : "#1f1f1f"}}>{initial}</h1>
      </div>
    </div>
  );
};

export default TableCard;
