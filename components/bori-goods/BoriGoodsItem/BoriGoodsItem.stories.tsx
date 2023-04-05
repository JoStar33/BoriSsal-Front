import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import BoriGoodsItem from "./BoriGoodsItem";

export default {
  title: '컴포넌트/보리굿즈/보리 굿즈페이지 아이템 테스트',
  component: BoriGoodsItem,
} as ComponentMeta<typeof BoriGoodsItem>;

const Template: ComponentStory<typeof BoriGoodsItem> = (args) => <BoriGoodsItem {...args} />;

export const BoriGoodsItemTest = Template.bind({});
BoriGoodsItemTest.args = {
  goods: {
    _id: "23",
    category_id: '88',
    bori_goods_name: '보리 티셔츠',
    bori_goods_price: 30000,
    bori_goods_stock: 20,
    bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
    bori_goods_like: 10,
    bori_goods_image: '/none',
    created_at: new Date,
  },
  category_name: '의류'
};

export const LongTextBoriGoodsItemTest = Template.bind({});
LongTextBoriGoodsItemTest.args = {
  goods: {
    _id: "23",
    category_id: '88',
    bori_goods_name: '보리 티셔츠',
    bori_goods_price: 30000,
    bori_goods_stock: 20,
    bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
    bori_goods_like: 10,
    bori_goods_image: '/none',
    created_at: new Date,
  },
  category_name: 'sdfsdafdasfadsfasdfdfsdfsdfsadfsdfdsffdsdsffasdfdsfdsf'
};