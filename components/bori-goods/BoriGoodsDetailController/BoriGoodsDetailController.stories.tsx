import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import BoriGoodsDetailController from "./BoriGoodsDetailController";

export default {
  title: '컴포넌트/보리굿즈/보리 굿즈 상세페이지 컨트롤러 영역',
  component: BoriGoodsDetailController,
} as ComponentMeta<typeof BoriGoodsDetailController>;

const Template: ComponentStory<typeof BoriGoodsDetailController> = (args) => <BoriGoodsDetailController {...args} />;

export const BoriGoodsDetailControllerTest = Template.bind({});
BoriGoodsDetailControllerTest.args = {
  goods:{
    _id: "23",
    category_id: '88',
    bori_goods_name: '보리 티셔츠',
    bori_goods_price: 30000,
    bori_goods_stock: 20,
    bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
    bori_goods_like: 10,
    bori_goods_image: '/none',
    created_at: new Date,
  }
};