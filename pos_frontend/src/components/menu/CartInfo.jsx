import React, { useRef, useEffect } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItems } from "../../redux/slices/cartSlice";

const CartInfo = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const scrolRef = useRef();
  useEffect(() => {
    if (scrolRef.current) {
      scrolRef.current.scrollTo({
        top: scrolRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  }, [cartData]);

  const handleRemove = (id) => {
    dispatch(removeItems(id));
  } 

  return (
    <div className="px-4 py-1 h-[51%]">
      <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
        Order Details
      </h1>
      <div className="mt-2 overflow-y-scroll scrollHide h-[85%]" ref={scrolRef}>
        {/* Cart items */}
        {cartData.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-[#ababab]">
            <FaNotesMedical className="text-4xl" />
            <h1 className="text-sm font-semibold mt-2">
              No Items in Cart
            </h1>
          </div>
        ) : (
          cartData.map((item, index) => {
            return (
              <div key={index} className="bg-[#1f1f1f] rounded-lg px-4 py-1.5 mb-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-[#ababab] font-semibold tracking-wide text-xs">
                    {item.name}
                  </h1>
                  <p className="text-[#ababab] font-semibold text-xs">x{item.quantity}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3">
                    <RiDeleteBin2Fill
                      onClick={() => handleRemove(item.id)}
                      className="text-[#ababab] cursor-pointer"
                      size={14}
                    />
                    <FaNotesMedical
                      className="text-[#ababab] cursor-pointer"
                      size={12}
                    />
                  </div>
                  <p className="text-[#f5f5f5] text-xs font-bold">₹{item.price}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CartInfo;
