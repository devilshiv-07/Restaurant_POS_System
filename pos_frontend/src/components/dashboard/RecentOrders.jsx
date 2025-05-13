import React from "react";
import { orders } from "../../constants";
import { GrUpdate } from "react-icons/gr";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
// import { getOrders, updateOrderStatus } from "../../https/index";
import { formatDateAndTime } from "../../utils";

const RecentOrders = () => {
  // const queryClient = useQueryClient();
  // const handleStatusChange = ({orderId, orderStatus}) => {
  //   console.log(orderId)
  //   orderStatusUpdateMutation.mutate({orderId, orderStatus});
  // };

  // const orderStatusUpdateMutation = useMutation({
  //   mutationFn: ({orderId, orderStatus}) => updateOrderStatus({orderId, orderStatus}),
  //   onSuccess: (data) => {
  //     enqueueSnackbar("Order status updated successfully!", { variant: "success" });
  //     queryClient.invalidateQueries(["orders"]); // Refresh order list
  //   },
  //   onError: () => {
  //     enqueueSnackbar("Failed to update order status!", { variant: "error" });
  //   }
  // })

  // const { data: resData, isError } = useQuery({
  //   queryKey: ["orders"],
  //   queryFn: async () => {
  //     return await getOrders();
  //   },
  //   placeholderData: keepPreviousData,
  // });

  // if (isError) {
  //   enqueueSnackbar("Something went wrong!", { variant: "error" });
  // }

  // console.log(resData.data.data);

  const handleStatusChange = () => {}

  return (
    <div className="container mx-auto bg-[#262626] px-4 py-3 rounded-lg">
      <h2 className="text-[#f5f5f5] text-lg font-semibold mb-3">
        Recent Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[#f5f5f5]">
          <thead className="bg-[#333] text-[#ababab]">
            <tr>
              <th className="px-3 py-2">Order ID</th>
              <th className="px-3 py-2">Customer</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Date & Time</th>
              <th className="px-3 py-2">Items</th>
              <th className="px-3 py-2">Table No</th>
              <th className="px-3 py-2">Total</th>
              <th className="px-3 py-2 text-center">Payment Method</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-b border-gray-600 hover:bg-[#333]"
              >
                <td className="p-4">#{Math.floor(new Date(order.orderDate).getTime())}</td>
                <td className="p-4">{order.customer}</td>
                <td className="p-4">
                  <select
                    className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-1.5 rounded-lg focus:outline-none ${
                      order.orderStatus === "Ready"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                    value={order.status}
                    onChange={(e) => handleStatusChange({orderId: order._id, orderStatus: e.target.value})}
                  >
                    <option className="text-yellow-500" value="In Progress">
                      In Progress
                    </option>
                    <option className="text-green-500" value="Ready">
                      Ready
                    </option>
                  </select>
                </td>
                <td className="p-4">{formatDateAndTime(order.dateTime)}</td>
                <td className="p-4">{order.items} Items</td>
                <td className="p-4">Table - {order.tableNo}</td>
                <td className="p-4">₹{order.total}</td>
                <td className="p-4">
                  {order.paymentMethod}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;