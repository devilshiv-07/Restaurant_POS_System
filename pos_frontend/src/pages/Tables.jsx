import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { tables } from '../constants/index'
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTables } from "../https";
import { enqueueSnackbar } from "notistack";

const Tables = () => {
  const [status, setStatus] = useState("all");

  const { data: resData, isError }  = useQuery({
    queryKey: ["tables"],
    queryFn: async () => {
      return await getTables();
    },
    placeholderData: keepPreviousData
  });

  console.log(resData);

  if( isError ){
    enqueueSnackbar( "Something went wrong!", { variant: "error" })
  }

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

        {/* See Tables Status */}
        <div className="flex items-center justify-around gap-4">
          {/* ALL */}
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-sm font-semibold ${
              status === "all" ? "bg-[#383838]" : ""
            } rounded-lg px-4 py-1.5`}
          >
            All
          </button>

          {/* Booked */}
          <button
            onClick={() => setStatus("booked")}
            className={`text-[#ababab] text-sm font-semibold ${
              status === "booked" ? "bg-[#383838]" : ""
            } rounded-lg px-4 py-1.5`}
          >
            Booked
          </button>
        </div>
      </div>

      <div className="scrollHide flex flex-wrap overflow-y-scroll mx-10 my-6 h-[70vh] gap-6 align-center justify-center">
        {
          resData?.data.tables.map((table,index) => (
            <TableCard key={index} _id={table._id} name={table.tableNo} status={table.status} initials={table?.currentOrder?.customerDetails.name} seats={table.seats} />
          ))
        }
      </div>

      <BottomNav />
    </section>
  );
};

export default Tables;
