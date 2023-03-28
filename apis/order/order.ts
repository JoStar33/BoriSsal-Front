import { ICartGoods } from "@/types/cart";
import { IPostDeliverAddress } from "@/types/deliverAddress";
import { IOrder } from '@/types/order';
import { customAxios } from "../axios/customAxios";

const postOrder = (price: number, bori_goods: ICartGoods[], deliver_address: IPostDeliverAddress) => {
  return customAxios.post('/order', {
    deliver_address: deliver_address,
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
};

const deleteOrder = (order_id: string) => {
  return customAxios.delete(`/order/${order_id}`);
}

export { postOrder, getOrder, deleteOrder };

