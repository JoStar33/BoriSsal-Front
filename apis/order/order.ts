import { ICartGoods } from "@/types/cart";
import { customAxios } from "../axios/customAxios";

const postOrder = (user_id: string, bori_goods: ICartGoods[]) => {
  return customAxios.post('/order', {
    user_id: user_id,
    bori_goods: bori_goods
  });
};

export { postOrder }