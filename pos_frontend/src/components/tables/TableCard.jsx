import React from "react";
import { getBgColor } from '../../utils/index'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { updateTable } from "../../redux/slices/customerSlice";

const TableCard = ({key, name, status, seats, initials}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle click on table card
  // If the table is booked, do nothing else navigate to menu page
  const handleClick = (name) => {
    if( status === "Booked") return

    // Dispatch the action to set the table number
    dispatch( updateTable({ tableNo: name }));

    navigate('/menu');
  }

  return (
    <div onClick={() => handleClick(name)} className="w-[240px] bg-[#262626] py-2 px-4 rounded-lg h-[27%] cursor-pointer mr-2 hover:bg-[#2e2e2e]">

      {/* Table No. and Book detail */}
      <div className="flex items-center justify-between mt-1.5">

        {/* Table no. */}
        <h1 className="text-[#c4c0c0] font-semibold">{name}</h1>

        {/* Info of booked or vacant */}
        <p className={`${ status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "text-[#ffc32b]  bg-[#dab71950]"} text-sm px-1.5 py-0.5 rounded-lg`}>{status}
        </p>
      </div>

      {/* User name logo */}
      <div className="flex items-center justify-center mt-4">
        <h1 className="font-bold text-white rounded-full p-2" style={{backgroundColor : initials ? getBgColor() : "#1f1f1f"}}>{initials}</h1>
      </div>

      {/* Available seats on the table */}
      <p className="text-[#ababab] text-sm mt-2" >Seats: <span className="text-[#f5f5f5]">{seats}</span></p>
    </div>
  );
};

export default TableCard;