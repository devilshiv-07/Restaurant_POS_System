import React, { useState } from "react";
import { menus } from "../../constants/index";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlice";

const MenuContainer = () => {
  // Function to handle adding items to the cart
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemId] = useState();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    if (itemCount === 0) return;

    const {name, price} = item;
    const newObj = { id: new Date().toISOString(), name, pricePerQuantity: price, quantity: itemCount, price: itemCount * price };

    dispatch(addItems(newObj));
    setItemCount(0);
  }

  const increment = (id) => {
    setItemId(id);
    if (itemCount >= 4) return;
    setItemCount((count) => count + 1);
  };

  const decrement = (id) => {
    setItemId(id);
    if (itemCount <= 0) return;
    setItemCount((count) => count - 1);
  };

  return (
    <>
      {/* Main menu container */}
      <div className="grid grid-cols-4 gap-3 px-10 py-4 w-[100%]">
        {menus.map((menu) => (
          // Menu items div
          <div
            key={menu.id}
            onClick={() => {
              setSelected(menu);
              setItemId(0);
              setItemCount(0);
            }}
            className="flex flex-col items-start justify-between px-4 py-2.5 rounded-lg h-[75px] cursor-pointer"
            style={{ backgroundColor: menu.bgColor }}
          >
            {/* Items div */}
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#f5f5f5] text-sm tracking-wide">
                {menu.icon} {menu.name}
              </h1>
              {selected.id === menu.id && (
                <GrRadialSelected className="text-white" size={12} />
              )}
            </div>
            <p className="text-[#ababab] text-xs tracking-wide">
              {menu.items.length} Items
            </p>
          </div>
        ))}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 mx-10 mt-4" />

      {/* Dishes menu container */}
      <div className="grid grid-cols-4 gap-3 px-10 py-4 w-[100%]">
        {selected?.items.map((item) => (
          // Dishes div
          <div
            key={item.id}
            className="flex flex-col items-start justify-between px-4 py-2 rounded-lg h-[95px] cursor-pointer bg-[#1a1a1a] hover:bg-[#2a2a2a]"
          >
            {/* Items name */}
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#f5f5f5] text-sm font-thin tracking-wide">
                {item.name}
              </h1>
              <button onClick={() => handleAddToCart(item)} className="bg-[#2e4a40] text-[#02ca3a] p-1 rounded" ><FaShoppingCart size={14}/></button>
            </div>

            {/* Item Price and quantity to select */}
            <div className="flex justify-between w-full items-center mb-1">
              <p className="text-[#f5f5f5] text-sm tracking-wide font-bold">
                ₹{item.price}
              </p>
              <div className="flex items-center justify-between rounded-full px-4 bg-[#1f1f1f] text-xs gap-4">
                <button onClick={() => decrement(item.id)} className="text-yellow-500 text-lg">
                  &minus;
                </button>
                <span className="text-white">{item.id === itemId ? itemCount : 0}</span>
                <button onClick={() => increment(item.id)} className="text-yellow-500 text-lg">
                  &#43;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuContainer;
