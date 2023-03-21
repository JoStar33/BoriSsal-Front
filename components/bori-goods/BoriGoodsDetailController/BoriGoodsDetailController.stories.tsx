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
    product_name: '보리 티셔츠',
    product_price: 30000,
    product_stock: 20,
    product_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
    product_like: 10,
    product_image: '/none',
    created_at: new Date,
  }
};