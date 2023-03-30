import { ComponentMeta, ComponentStory } from '@storybook/react';
import OrderItem from './OrderItem';

export default {
  title: '컴포넌트/어드민/주문/주문 요소',
  component: OrderItem,
} as ComponentMeta<typeof OrderItem>;

const Template: ComponentStory<typeof OrderItem> = (args) => <OrderItem {...args}/>;

const setState = jest.fn() as any;

export const OrderItemTest = Template.bind({});
OrderItemTest.args = {
  order: {              
    order_date: new Date(),
    email: "jojo@naver.com",
    address: "경기도 군포시",
    address_detail: "102동",
    phone_number: "010-3542-7643",
    order_detail: [
      {
        bori_goods_count: 1,
        bori_goods_id: "64196d2665890a85382a7e76",
        bori_goods_image: "/bori_goods_images/bori_cup.jpg",
        bori_goods_name: "보리 컵",
        bori_goods_price: 7000,
      },
    ],
    order_status: "배송진행",
    price: 7000,
    _id: "23"
  },
  updateOrderId: setState,
  setDialog: setState
}