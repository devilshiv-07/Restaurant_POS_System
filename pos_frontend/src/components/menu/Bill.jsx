import React, { useState } from "react";
import { getTotalPrice } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack"
import { createOrderRazorpay, verifyPaymentRazorpay } from "../../https";


// Razorpay script function
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Bill = () => {
  const customerData = useSelector((state) => state.customer);
  const cartData = useSelector((state) => state.cart);

  // Function to calculate the total price
  const total = useSelector(getTotalPrice);
  const tax = (total * 5.25) / 100;
  const grandTotal = total + tax;
  const roundedTotal = Math.round(grandTotal);

  const [paymentMethod, setPaymentMethod] = useState();

  // function to place order
  const handlePlaceOrder = async () => {
    if(!paymentMethod){ 
      enqueueSnackbar("Please select a payment method", {variant: "warning"});
      return;
    }

    // load the script
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      )

      if(!res) {
        enqueueSnackbar("Razorpay SDK failed to load. Are you Online?", {
          variant: "warning",
        });
        return;
      }

      // Create order
      const reqData = {
        amount: roundedTotal.toFixed(2)
      };

      const { data } = await createOrderRazorpay(reqData);
 
      const options = {
        key: `${import.meta.env.VITE_RAZORPAY_KEY_ID}`,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "RESTRO",
        description: "Secure Payment for Your Meal",
        order_id: data.order.id,
        handler: async function (response) {
          const verification = await verifyPaymentRazorpay(response);
          console.log(verification);
          enqueueSnackbar(verification.data.message, {
            variant: "success"
          });
        },
        prefill: {
          name: customerData.name,
          emial: "",
          contact: customerData.phone,
        },
        theme: { color: "#025cca" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();


    } catch (error) {
      console.log(error);
      enqueueSnackbar("Payment Failed!", {
        variant: "error",
      })
    }
  };


  return (
    <div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium">Items({cartData.length})</p>
        <h1 className="text-[#f5f5f5] text-xs font-bold">₹ {total.toFixed(2)}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium">Tax(5.25%)</p>
        <h1 className="text-[#f5f5f5] text-xs font-bold">₹ {tax.toFixed(2)}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium">Total with Tax</p>
        <h1 className="text-[#f5f5f5] text-xs font-bold">₹ {roundedTotal.toFixed(2)}</h1>
      </div>
      <div className="flex items-center gap-3 px-5 mt-3">
        <button onClick={() => setPaymentMethod("Cash")} className={`bg-[#1f1f1f] px-2 py-2 w-full rounded-lg text-[#ababab] font-semibold text-xs ${paymentMethod === "Cash" ? "bg-[#383737]" : ""}`}>Cash</button>
        <button onClick={() => setPaymentMethod("Online")} className={`bg-[#1f1f1f] px-2 py-2 w-full rounded-lg text-[#ababab] font-semibold text-xs ${paymentMethod === "Online" ? "bg-[#383737]" : ""}`}>Online</button>
      </div>
      <div className="flex items-center gap-3 px-5 mt-3">
        <button className="bg-[#025cca] px-4 py-2 w-full rounded-lg text-[#f5f5f5] font-semibold text-xs">Print Receipt</button>
        <button onClick={handlePlaceOrder} className="bg-[#f6b100] px-4 py-2 w-full rounded-lg text-[#1f1f1f] font-semibold text-xs">Place Order</button>
      </div>
    </div>
  );
};

export default Bill;
