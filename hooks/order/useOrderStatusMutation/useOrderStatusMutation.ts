import { patchOrder } from "@/apis/order/order";
import { useMutation, useQueryClient } from "react-query";

export const useOrderStatusMutation = (order_id: string) => {
  const queryClient = useQueryClient();
  return useMutation((order_status: string) => patchOrder(order_id, order_status), {
    onSuccess: () => {
      queryClient.invalidateQueries("order");
    }
  });
};
