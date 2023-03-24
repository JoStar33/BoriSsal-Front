import { deleteCart } from "@/apis/user/cart";
import { useUserStore } from "@/store/user";
import { useMutation, useQueryClient } from "react-query";

export const useDeleteCartMutation = (
  cart_id: string
) => {
  const queryClient = useQueryClient();
  const { user } = useUserStore();
  return useMutation(
    () => deleteCart(user.id, cart_id), {
      onSuccess: () => {
        queryClient.invalidateQueries("cart");
      }
    }
  );
};
