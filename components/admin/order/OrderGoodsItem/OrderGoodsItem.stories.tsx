import { ComponentMeta, ComponentStory } from '@storybook/react';
import OrderGoodsItem from './OrderGoodsItem';

export default {
  title: '컴포넌트/어드민/주문/주문 상품 요소',
  component: OrderGoodsItem,
} as ComponentMeta<typeof OrderGoodsItem>;

const Template: ComponentStory<typeof OrderGoodsItem> = (args) => <OrderGoodsItem {...args}/>;


export const OrderGoodsItemTest = Template.bind({});
OrderGoodsItemTest.args = {
  boriGoods: {
    bori_goods_count: 1,
    bori_goods_id: "64196d2665890a85382a7e76",
    bori_goods_image: "/bori_goods_images/bori_cup.jpg",
    bori_goods_name: "보리 컵",
    bori_goods_price: 7000,
  }
}