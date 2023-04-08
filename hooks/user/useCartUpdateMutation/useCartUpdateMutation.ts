import { updateCart } from "@/apis/user/cart";
import { useCartStore } from "@/store/cart";
import { useMutation, useQueryClient } from "react-query";

export const useCartUpdateMutation = (
  cart_id: string,
  bori_goods_count: number
) => {

  const queryClient = useQueryClient();
  return useMutation(
    () => updateCart(cart_id, bori_goods_count), {
      onSuccess: () => {
        queryClient.invalidateQueries("cart");
      }
    }
  );
};
