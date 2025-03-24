import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";

const Menu = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">

      {/* Left div */}
      {/* <div className="flex-[3] bg-red-500"></div>

      <div className="flex items-center justify-between px-10 py-2 mt-2">

        Menu Heading
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-xl font-bold tracking-wide">
            Menu
          </h1>
        </div>

        <div className="flex items-center justify-around gap-4">
          ALL
          <button>
            All
          </button>
        </div>
      </div> */}

      <BottomNav />
    </section>
  );
};

export default Menu;
