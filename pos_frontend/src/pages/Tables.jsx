import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { tables } from '../constants/index'

const Tables = () => {
  const [status, setStatus] = useState("all");

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
          tables.map((table) => (
            <TableCard key={table.id} name={table.name} status={table.status} initials={table.initial} seats={table.seats} />
          ))
        }
      </div>

      <BottomNav />
    </section>
  );
};

export default Tables;
