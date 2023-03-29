import { ICartGoods } from "@/types/cart";
import { IPostDeliverAddress } from "@/types/deliverAddress";
import { IOrder } from '@/types/order';
import { customAxios } from "../axios/customAxios";

const postOrder = (email: string, price: number, bori_goods: ICartGoods[], deliver_address: IPostDeliverAddress) => {
  return customAxios.post('/order', {
    email: email,
    deliver_address: deliver_address,
    price: price,
    bori_goods: bori_goods
  });
};

const patchOrder = (order_id: string, order_status: string) => {
  return customAxios.patch('/order', {
    order_id: order_id,
    order_status: order_status
  })
}

const getOrder = () => {
  const order = customAxios.get('/order')    
    .then(res => res)
    .then(res => res.data)
    .then((data: IOrder[]) => data);
  return order;
};

const getAllOrder = (limit: number, search: string, start_date: Date | null, end_date: Date | null) => {
  const order = customAxios.get(`/order/${limit}?email=${search}&start_date=${start_date}&end_date=${end_date}`)
    .then(res => res)
    .then(res => res.data)
    .then((data: {
      order: IOrder[],
      overflow: boolean
    }) => data);
  return order;
}

const deleteOrder = (order_id: string) => {
  return customAxios.delete(`/order/${order_id}`);
}

export { postOrder, getOrder, getAllOrder, deleteOrder, patchOrder };

