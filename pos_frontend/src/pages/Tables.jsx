import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
// import { tables } from '../constants/index' // Removed unused import
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTables } from "../https";
import { enqueueSnackbar } from "notistack";

const Tables = () => {
  const [status, setStatus] = useState("All");

  const { data: resData, isError }  = useQuery({
    queryKey: ["tables"],
    queryFn: async () => {
      return await getTables();
    },
    placeholderData: keepPreviousData
  });

  if( isError ){
    enqueueSnackbar( "Something went wrong!", { variant: "error" })
  }

  console.log(resData);
  const filteredTables = status === "All" ? resData?.data.tables || [] : resData?.data.tables.filter((table) => table.status === status) || []

  return (
    <section className="bg-[#1f1f1f] h-[85vh] overflow-hidden">

      {/* Container Div */}
      <div className="flex items-center justify-between px-10 py-2 mt-2">

        {/* Tables Heading */}
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-xl font-bold tracking-wide">
            Tables
          </h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-around gap-4">
          {["All", "Available", "Booked"].map((label, index) => (
            <button
            key={index}
            onClick={() => setStatus(label)}
            className={`text-[#ababab] text-sm font-semibold ${
              status === label ? "bg-[#383838]" : ""
            } rounded-lg px-4 py-1.5`}
          >
            {label}
          </button>
          ))}
        </div>
      </div>

      <div className="scrollHide flex flex-wrap overflow-y-scroll mx-10 my-6 max-h-[68vh] gap-9 align-center justify-center">
        {
          filteredTables.map((table,index) => (
            <TableCard key={index} _id={table._id} name={table.tableNo} status={table.status} initials={table?.currentOrder?.customerDetails.name} seats={table.seats} />
          ))
        }
      </div>

      <BottomNav />
    </section>
  );
};

export default Tables;
