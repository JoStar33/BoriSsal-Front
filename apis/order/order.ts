import { ICartGoods } from '@/types/cart';
import { IPostDeliverAddress } from '@/types/deliverAddress';
import { IOrder } from '@/types/order';
import { requests } from '../axios/customAxios';

const postOrder = async (email: string, price: number, bori_goods: ICartGoods[], deliver_address: IPostDeliverAddress) => {
  return await requests.post('/order', {
    email: email,
    deliver_address: deliver_address,
    price: price,
    bori_goods: bori_goods,
  });
};

const patchOrder = async (order_id: string, order_status: string) => {
  return await requests.patch('/order', {
    order_id: order_id,
    order_status: order_status,
  });
};

const getOrder = async () => {
  const order = await requests.get<IOrder[]>('/order');
  return order;
};

const getAllOrder = async (limit: number, search: string, start_date: Date | null, end_date: Date | null) => {
  const order = await requests.get<{ order: IOrder[]; overflow: boolean }>(
    `/order/${limit}?email=${search}&start_date=${start_date}&end_date=${end_date}`,
  );
  return order;
};

const deleteOrder = async (order_id: string) => {
  return await requests.delete(`/order/${order_id}`);
};

export { postOrder, getOrder, getAllOrder, deleteOrder, patchOrder };
