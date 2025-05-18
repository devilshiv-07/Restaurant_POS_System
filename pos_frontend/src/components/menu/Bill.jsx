import React, { useState } from "react";
import { getTotalPrice, removeAllItems } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { addOrder, createOrderRazorpay, updateTable, verifyPaymentRazorpay } from "../../https";
import { useMutation } from "@tanstack/react-query";
import { removeCustomer } from "../../redux/slices/customerSlice";

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
};

const Bill = () => {
  const dispatch = useDispatch();

  const customerData = useSelector((state) => state.customer);
  const cartData = useSelector((state) => state.cart);

  // Function to calculate the total price
  const total = useSelector(getTotalPrice);
  const taxRate = 5.25;
  const tax = (total * taxRate) / 100;
  const totalPriceWithTax = total + tax;

  const [paymentMethod, setPaymentMethod] = useState();

  // function to place order
  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      enqueueSnackbar("Please select a payment method", { variant: "warning" });
      return;
    }

    if (paymentMethod === "Online") {
      // load the script
      try {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
          enqueueSnackbar("Razorpay SDK failed to load. Are you Online?", {
            variant: "warning",
          });
          return;
        }

        // Create order
        const reqData = {
          amount: totalPriceWithTax.toFixed(2),
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
            // console.log(verification);
            enqueueSnackbar(verification.data.message, {
              variant: "success",
            });

            // place the order
            const orderData = {
              customerDetails: {
                name: customerData.customerName,
                phone: customerData.customerPhone,
                guests: customerData.guests,
              },
              orderStatus: "In Progress",
              bills: {
                total: total,
                tax: tax,
                totalWithTax: totalPriceWithTax,
              },
              items: cartData,
              table: customerData.table.tableId
            };

            setTimeout(() => {
              orderMutation.mutate(orderData);
            }, 1500);

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
        });
      }
    } else {
      // Place the order
      const orderData = {
        customerDetails: {
          name: customerData.customerName,
          phone: customerData.customerPhone,
          guests: customerData.guests,
        },
        orderStatus: "In Progress",
        bills: {
          total: total,
          tax: tax,
          totalWithTax: totalPriceWithTax,
        },
        items: cartData,
        table: customerData.table.tableId,
        paymentMethod: paymentMethod,
      };
      orderMutation.mutate(orderData);
    }
  };

  const orderMutation = useMutation({
    mutationFn: (reqData) => addOrder(reqData),
    onSuccess: (resData) => {
      const { data } = resData.data;
      console.log("This is response data");
      console.log(resData.data);

      // Update Table
      const tableData = {
        status: "Booked",
        orderId: data._id,
        tableId: data.table,
      };

      setTimeout(() => {
        tableUpdateMutation.mutate(tableData);
      }, 1500);

      enqueueSnackbar("Order Placed!", {
        variant: "success",
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const tableUpdateMutation = useMutation({
    mutationFn: (reqData) => updateTable(reqData),
    onSuccess: (resData) => {
      console.log(resData);
      dispatch(removeCustomer());
      dispatch(removeAllItems());
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium">
          Items({cartData.length})
        </p>
        <h1 className="text-[#f5f5f5] text-xs font-bold">
          ₹ {total.toFixed(2)}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium">Tax(5.25%)</p>
        <h1 className="text-[#f5f5f5] text-xs font-bold">₹ {tax.toFixed(2)}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium">Total with Tax</p>
        <h1 className="text-[#f5f5f5] text-xs font-bold">
          ₹ {totalPriceWithTax.toFixed(2)}
        </h1>
      </div>
      <div className="flex items-center gap-3 px-5 mt-3">
        <button
          onClick={() => setPaymentMethod("Cash")}
          className={`bg-[#1f1f1f] px-2 py-2 w-full rounded-lg text-[#ababab] font-semibold text-xs ${
            paymentMethod === "Cash" ? "bg-[#383737]" : ""
          }`}
        >
          Cash
        </button>
        <button
          onClick={() => setPaymentMethod("Online")}
          className={`bg-[#1f1f1f] px-2 py-2 w-full rounded-lg text-[#ababab] font-semibold text-xs ${
            paymentMethod === "Online" ? "bg-[#383737]" : ""
          }`}
        >
          Online
        </button>
      </div>
      <div className="flex items-center gap-3 px-5 mt-3">
        <button className="bg-[#025cca] px-4 py-2 w-full rounded-lg text-[#f5f5f5] font-semibold text-xs">
          Print Receipt
        </button>
        <button
          onClick={handlePlaceOrder}
          className="bg-[#f6b100] px-4 py-2 w-full rounded-lg text-[#1f1f1f] font-semibold text-xs"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Bill;
