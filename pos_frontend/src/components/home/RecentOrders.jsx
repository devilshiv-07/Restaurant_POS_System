import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrders = () => {
  return (
    <div className="px-8 mt-6">
      <div className="bg-[#1a1a1a] w-full h-[42vh] rounded-lg">

        {/* Recent Orders */}
        <div className="flex justify-between items-center px-6 py-3">
          <h1 className="text-[#f5f5f5] text-md font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a href="" className="text-[#025cca] text-xs font-semibold">
            View all
          </a>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[25px] px-6 py-1.5 my-2 mx-6">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1f1f1f] w-full outline-none text-[#f5f5f5]"
          />
        </div>

        {/* Order List */}
        <div className="scrollHide mt-5 px-6 overflow-y-scroll h-[58%] scrollbar-hide">
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList /> 
        </div>

      </div>
    </div>
  );
};

export default RecentOrders;
