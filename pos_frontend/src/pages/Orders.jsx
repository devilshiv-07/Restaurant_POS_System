import React, { useEffect, useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getOrders } from "../https/index";
import { enqueueSnackbar } from "notistack";

const Orders = () => {
  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData,
  });

  if (isError) {
    enqueueSnackbar("Something went weong!", { variant: "error" });
  }

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
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-sm font-semibold ${
              status === "all" ? "bg-[#383838]" : ""
            } rounded-lg px-4 py-1.5`}
          >
            All
          </button>

          {/* In Progress */}
          <button
            onClick={() => setStatus("progress")}
            className={`text-[#ababab] text-sm font-semibold ${
              status === "progress" ? "bg-[#383838]" : ""
            } rounded-lg px-4 py-1.5`}
          >
            In Progress
          </button>

          {/* Ready */}
          <button
            onClick={() => setStatus("ready")}
            className={`text-[#ababab] text-sm font-semibold ${
              status === "ready" ? "bg-[#383838]" : ""
            } rounded-lg px-4 py-1.5`}
          >
            Ready
          </button>

          {/* Completed */}
          <button
            onClick={() => setStatus("completed")}
            className={`text-[#ababab] text-sm font-semibold ${
              status === "completed" ? "bg-[#383838]" : ""
            } rounded-lg px-4 py-1.5`}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="w-full max-h-[70vh] flex items-center justify-center mt-6">
        <div className="w-[82.5%] h-[100%] flex flex-wrap gap-8 overflow-y-scroll scrollHide">
          {resData?.data.data.length > 0 ? (
            resData.data.data.map((order, index) => {
              return <OrderCard key={index} order={order} />;
            })
          ) : (
            <p className="col-span-3 text-gray-500">No Orders Available</p>
          )}
        </div>
      </div>

      <BottomNav />
    </section>
  );
};

export default Orders;
