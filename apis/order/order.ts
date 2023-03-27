import { ICartGoods } from "@/types/cart";
import { IOrder } from '@/types/order';
import { customAxios } from "../axios/customAxios";

const postOrder = (price: number, bori_goods: ICartGoods[]) => {
  return customAxios.post('/order', {
    price: price,
    bori_goods: bori_goods
  });
};

const getOrder = () => {
  const order = customAxios.get('/order')    
    .then(res => res)
    .then(res => res.data)
    .then((data: IOrder) => data);
  return order;
}

export { postOrder, getOrder };

