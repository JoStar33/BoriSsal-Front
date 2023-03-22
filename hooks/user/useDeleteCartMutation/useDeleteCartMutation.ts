import { useMutation, useQueryClient } from "react-query";
import { deleteCart } from "@/apis/user/cart";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const useDeleteCartMutation = (
  cart_id: string
) => {
  const queryClient = useQueryClient();
  const { user } = useSelector((state: RootState) => state.userStore);
  return useMutation(
    () => deleteCart(user.id, cart_id), {
      onSuccess: () => {
        queryClient.invalidateQueries("cart");
      }
    }
  );
};
