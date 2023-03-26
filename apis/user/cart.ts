import { ICartGoods, IGetCartGoods } from "@/types/cart";
import { customAxios } from "../axios/customAxios";

const postCart = (cartGoods: ICartGoods) => {
  return customAxios.post('/cart', cartGoods);
};
const updateCart = (  cart_id: string, bori_goods_count: number) => {
  return customAxios.patch('/cart', {
    cart_id: cart_id,
    bori_goods_count: bori_goods_count
  });
}

const getCart = () => {
  const cart =  customAxios.get(`/cart`)
    .then(res => res)
    .then(res => res.data)
    .then((data: IGetCartGoods[]) => data);
  return cart;
};

const deleteCart = (cart_id: string) => {
  return customAxios.delete(`/cart/${cart_id}`);
}

export { postCart, getCart, deleteCart, updateCart };

