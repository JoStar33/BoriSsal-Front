import { ICartGoods } from './cart';
export interface IOrder {
  _id: string;
  order_date: Date;
  price: number;
  order_status: string;
  order_detail: ICartGoods[];
  email: string,
  phone_number: string,
  address: string,
  address_detail: string
}