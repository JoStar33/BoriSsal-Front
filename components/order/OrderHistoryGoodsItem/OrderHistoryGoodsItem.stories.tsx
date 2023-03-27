import { ComponentMeta, ComponentStory } from '@storybook/react';
import OrderHistoryGoodsItem from './OrderHistoryGoodsItem';

export default {
  title: '컴포넌트/주문/주문내역 상품 아이템',
  component: OrderHistoryGoodsItem,
} as ComponentMeta<typeof OrderHistoryGoodsItem>;

const Template: ComponentStory<typeof OrderHistoryGoodsItem> = (args) => <OrderHistoryGoodsItem {...args} />;

export const OrderHistoryGoodsItemTest = Template.bind({});
OrderHistoryGoodsItemTest.args = {
  boriGoods: {
    bori_goods_count: 1,
    bori_goods_id: "64196d2665890a85382a7e76",
    bori_goods_image: "/bori_goods_images/bori_cup.jpg",
    bori_goods_name: "보리 컵",
    bori_goods_price: 7000,
  }
}
