import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";
import CustomerInfo from "../components/menu/CustomerInfo";
import CartInfo from "../components/menu/CartInfo";
import Bill from "../components/menu/Bill";
import { useSelector } from "react-redux";

const Menu = () => {

  const customerData = useSelector(state => state.customer)
  const { customerName } = customerData;
  const tableNo = customerData.table?.tableNo;

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left div */}
      <div className="flex-[3]">
        {/* Header of Left div */}
        <div className="flex items-center justify-between px-10 py-2 mt-4">
          {/* Menu Heading */}
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">
              Menu
            </h1>
          </div>

          {/* Admin info and selected table */}
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <MdRestaurantMenu className="text-[#f5f5f5] text-3xl " />
              <div className="flex flex-col items-start">
                <h1 className="text-sm text-[#f5f5f5]  font-semibold">
                  {customerName || "Customer Name"}
                </h1>
                <p className="text-xs text-[#ababab] font-medium">
                  Table: {tableNo || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <MenuContainer />
      </div>

      {/* Right div */}
      <div className="flex-[1] bg-[#1a1a1a] my-6 mr-4 -ml-2 h-[78vh] rounded-lg pt-2">

        {/* Customer Info */}
        <CustomerInfo />

        {/* Separator line */}
        <hr className="border-[#2a2a2a] border-t-2 h-[2%]" />

        {/* Cart Info */}
        <CartInfo />

        {/* Separator line */}
        <hr className="border-[#2a2a2a] border-t-2 h-[2%]" />

        {/* Bills */}
        <Bill />

      </div>

      <BottomNav />
    </section>
  );
};

export default Menu;
