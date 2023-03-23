import { IGetCartGoods, IPostCartGoods } from "@/types/cart";
import { customAxios } from "../axios/customAxios";

const postCart = (postCartGoods: IPostCartGoods) => {
  return customAxios.post('/cart', postCartGoods);
};
const updateCart = (  cart_id: string, bori_goods_count: number) => {
  return customAxios.patch('/cart', {
    cart_id: cart_id,
    bori_goods_count: bori_goods_count
  });
}

const getCart = (user_id: string) => {
  const cart =  customAxios.get(`/cart/${user_id}`)
    .then(res => res)
    .then(res => res.data)
    .then((data: IGetCartGoods[]) => data);
  return cart;
};

const deleteCart = (user_id: string, cart_id: string) => {
  return customAxios.delete(`/cart/${user_id}/${cart_id}`);
}

export { postCart, getCart, deleteCart, updateCart };

