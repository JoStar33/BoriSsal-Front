import { ICartGoods } from './cart';
export interface IOrder {
  _id: string;
  order_date: Date;
  price: number;
  order_status: string;
  order_detail: ICartGoods[]
}