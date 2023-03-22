import { IPostCartGoods } from "@/types/cart";
import { customAxios } from "../axios/customAxios";

const postCart = (postCartGoods: IPostCartGoods) => {
  return customAxios.post('/cart', postCartGoods)
};

const getCart = (user_id: string) => {
  return customAxios.get(`/cart/${user_id}`)
};

const deleteCart = (user_id: string, cart_id: string) => {
  return customAxios.delete(`/cart/${user_id}/${cart_id}`);
}

export { postCart, getCart, deleteCart };