import { useMutation } from "react-query";
import { ICartGoods } from "@/types/cart";
import { postCart } from "@/apis/user/cart";

export const useCartMutation = (
  user_id: string,
  cartGoods: ICartGoods
) => {
  return useMutation(
    () => postCart(user_id, cartGoods),
  );
};
