import { ComponentMeta, ComponentStory } from '@storybook/react';
import OrderHistoryItem from './OrderHistoryItem';

export default {
  title: '컴포넌트/주문/주문내역 아이템',
  component: OrderHistoryItem,
} as ComponentMeta<typeof OrderHistoryItem>;

const Template: ComponentStory<typeof OrderHistoryItem> = (args) => <OrderHistoryItem {...args} />;

export const OrderHistoryItemTest = Template.bind({});
OrderHistoryItemTest.args = {
  order: {
    order_date: new Date,
    email: 'rhrhwewe@naver.com',
    phone_number: "01033332222",
    address: '경기도 안양시 동안구 호랑이아파트',
    address_detail: '102동 304호',
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
    _id: "23",
  },
}
