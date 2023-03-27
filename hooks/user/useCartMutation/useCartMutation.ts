import { useMutation } from "react-query";
import { ICartGoods } from "@/types/cart";
import { postCart } from "@/apis/user/cart";

export const useCartMutation = (
  cartGoods: ICartGoods
) => {
  return useMutation(
    () => postCart(cartGoods),
  );
};
