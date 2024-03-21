import { ICartGoods, IGetCartGoods } from '@/types/cart';
import { requests } from '../axios/customAxios';

const postCart = async (cartGoods: ICartGoods) => {
  return await requests.post('/cart', cartGoods);
};
const updateCart = async (cart_id: string, bori_goods_count: number) => {
  return await requests.patch('/cart', {
    cart_id: cart_id,
    bori_goods_count: bori_goods_count,
  });
};

const getCart = async () => {
  const cart = await requests.get<IGetCartGoods[]>(`/cart`);
  return cart;
};

const deleteCart = async (cart_id: string) => {
  return await requests.delete(`/cart/${cart_id}`);
};

export { postCart, getCart, deleteCart, updateCart };
