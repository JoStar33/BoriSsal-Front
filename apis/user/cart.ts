import { IPostCartGoods, IGetCartGoods } from "@/types/cart";
import { customAxios } from "../axios/customAxios";

const postCart = (postCartGoods: IPostCartGoods) => {
  return customAxios.post('/cart', postCartGoods)
};
interface ICartAxios {
  cart: IGetCartGoods[]
}
const getCart = (user_id: string) => {
  const cart =  customAxios.get(`/cart/${user_id}`)
    .then(res => res)
    .then(res => res.data)
    .then((data: ICartAxios) => data)
  return cart;
};

const deleteCart = (user_id: string, cart_id: string) => {
  return customAxios.delete(`/cart/${user_id}/${cart_id}`);
}

export { postCart, getCart, deleteCart };
