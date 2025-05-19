import React, { useState } from "react";
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
    enqueueSnackbar("Something went wrong!", { variant: "error" });
  }

  const [status, setStatus] = useState("All");

  // Filter logic based on selected status
  const filteredOrders =
    status === "All"
      ? resData?.data.data || []
      : resData?.data.data.filter((order) => order.orderStatus === status) || [];

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-10 py-2 mt-2">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-xl font-bold tracking-wide">
            Orders
          </h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-around gap-4">
          {["All", "In Progress", "Ready", "Completed"].map((label) => (
            <button
              key={label}
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

      {/* Order List */}
      <div className="w-full h-[70vh] justify-center mt-5 flex flex-wrap gap-8 overflow-y-scroll scrollHide">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order, index) => (
            <OrderCard key={index} order={order} />
          ))
        ) : (
          <p className="col-span-3 text-gray-500">No Orders Available</p>
        )}
      </div>

      <BottomNav />
    </section>
  );
};

export default Orders;
