import { IPostCartGoods } from "@/types/cart";
import { customAxios } from "../axios/customAxios";

const postCart = (postCartGoods: IPostCartGoods) => {
  return customAxios.post('/cart', postCartGoods)
}

export { postCart };