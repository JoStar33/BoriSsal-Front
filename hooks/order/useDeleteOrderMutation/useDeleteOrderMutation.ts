import { deleteOrder } from "@/apis/order/order";
import { useMutation, useQueryClient } from "react-query";

export const useDeleteOrderMutation = (order_id: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => deleteOrder(order_id), {
    onSuccess: () => {
      queryClient.invalidateQueries("order");
    }
  });
};
