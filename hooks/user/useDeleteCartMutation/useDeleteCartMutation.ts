import { deleteCart } from "@/apis/user/cart";
import { useMutation, useQueryClient } from "react-query";

export const useDeleteCartMutation = (
  cart_id: string
) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => deleteCart(cart_id), {
      onSuccess: () => {
        queryClient.invalidateQueries("cart");
      }
    }
  );
};
