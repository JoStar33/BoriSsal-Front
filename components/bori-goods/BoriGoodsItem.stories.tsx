import { ComponentStory, ComponentMeta } from "@storybook/react";
import BoriGoodsItem from "./BoriGoodsItem";

export default {
  title: '보리 굿즈페이지 아이템 테스트',
  component: BoriGoodsItem,
} as ComponentMeta<typeof BoriGoodsItem>;

const Template: ComponentStory<typeof BoriGoodsItem> = (args) => <BoriGoodsItem {...args} />;

export const BoriGoodsItemTest = Template.bind({});
BoriGoodsItemTest.args = {
  bori_goods_image: '/none',
  goods_like: 5,
  goods_name: '보리 티셔츠',
  product_price: 15000,
  category_name: '의류'
};

export const LongTextBoriGoodsItemTest = Template.bind({});
LongTextBoriGoodsItemTest.args = {
  bori_goods_image: '/none',
  goods_like: 12,
  goods_name: 'sadfadsfdsfdfdfaffdsfdsaffdsafdsfdsfasdfdsfdsfsdf',
  product_price: 25000,
  category_name: 'sdfsdafdasfadsfasdfdfsdfsdfsadfsdfdsffdsdsffasdfdsfdsf'
};