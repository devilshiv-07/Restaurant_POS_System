import React from "react";
import { popularDishes } from "../../constants/index";
const PopularDishes = () => {
  return (
    <div className="mt-6 pr-8">

      <div className="bg-[#1a1a1a] w-full overflow-hidden rounded-lg">

        {/* Popular Dish tag */}
        <div className="flex justify-between items-center px-6 pt-4 pb-2">
          <h1 className="text-[#f5f5f5] text-md font-semibold tracking-wide">
            Popular Dishes
          </h1>
          <a href="" className="text-[#025cca] text-sm font-semibold">
            View all
          </a>
        </div>

        {/* Dishes List */}
        <div className="scrollHide mb-2 overflow-y-scroll h-[69vh]">
          {popularDishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 mt-4 py-2.5 mx-6"
              >
                <h1 className="text-[#f5f5f5] font-bold text-md mr-4">{dish.id < 10 ? `0${dish.id}` : `${dish.id}`}</h1>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-[35px] h-[35px] rounded-2xl"
                />
                <div>
                  <h1 className="tracking-wide text-[#f5f5f5] font-semibold text-sm">
                    {dish.name}
                  </h1>
                  <p className="text-[#f5f5f5] text-sm font-semibold">
                    <span className="text-[#ababab] text-xs">Orders: </span>
                    {dish.numberOfOrders}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
