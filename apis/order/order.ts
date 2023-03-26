import { ICartGoods } from "@/types/cart";
import { customAxios } from "../axios/customAxios";

const postOrder = (bori_goods: ICartGoods[]) => {
  return customAxios.post('/order', {
    bori_goods: bori_goods
  });
};

export { postOrder }