import React, { useEffect, useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCart from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";

const Orders = () => {

  const [status, setStatus] = useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">

      {/* Container Div */}
      <div className="flex items-center justify-between px-10 py-2 mt-2">

        {/* Orders Heading */}
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-xl font-bold tracking-wide">
            Orders
          </h1>
        </div>

        <div className="flex items-center justify-around gap-4">
          {/* ALL */}
          <button onClick={() => setStatus("all")} className={`text-[#ababab] text-sm font-semibold ${ status === "all" ? "bg-[#383838]" : ""} rounded-lg px-4 py-1.5`}>
            All
          </button>

          {/* In Progress */}
          <button onClick={() => setStatus("progress")} className={`text-[#ababab] text-sm font-semibold ${ status === "progress" ? "bg-[#383838]" : ""} rounded-lg px-4 py-1.5`}>
            In Progress
          </button>

          {/* Ready */}
          <button onClick={() => setStatus("ready")} className={`text-[#ababab] text-sm font-semibold ${ status === "ready" ? "bg-[#383838]" : ""} rounded-lg px-4 py-1.5`}>
            Ready
          </button>

          {/* Completed */}
          <button onClick={() => setStatus("completed")} className={`text-[#ababab] text-sm font-semibold ${ status === "completed" ? "bg-[#383838]" : ""} rounded-lg px-4 py-1.5`}>
            Completed
          </button>
        </div>
      </div>

      <div className="scrollHide flex flex-wrap overflow-y-scroll my-5 h-[70vh] py-2 px-10 gap-8 justify-center">
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
        <OrderCart />
      </div>

      <BottomNav />
    </section>
  );
};

export default Orders;
