import { updateCart } from "@/apis/user/cart";
import { useMutation } from "react-query";

export const useCartUpdateMutation = (
  cart_id: string,
  bori_goods_count: number
) => {
  return useMutation(
    () => updateCart(cart_id, bori_goods_count),
  );
};
