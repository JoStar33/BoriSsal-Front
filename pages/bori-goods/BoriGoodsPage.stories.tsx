import { ComponentStory, ComponentMeta } from "@storybook/react";
import BoriGoodsPage from "./index.page";

export default {
  title: '보리 굿즈페이지 테스트',
  component: BoriGoodsPage,
} as ComponentMeta<typeof BoriGoodsPage>;

const Template: ComponentStory<typeof BoriGoodsPage> = (args) => <BoriGoodsPage {...args} />;

export const BoriGoodsPageTest = Template.bind({});
BoriGoodsPageTest.args = {
  goodsData: [{
    _id: "23",
    category_id: '88',
    product_name: '보리 티셔츠',
    product_price: 30000,
    product_stock: 20,
    product_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
    product_like: 10,
    product_image: '/none',
    created_at: new Date,
  }],
  categoryData: [{
    _id: "88",
    category_name:"의류"
  },]
};

export const ManyBoriGoodsPageTest = Template.bind({});
ManyBoriGoodsPageTest.args = {
  goodsData: [{
    _id: "23",
    category_id: '88',
    product_name: '보리 티셔츠',
    product_price: 30000,
    product_stock: 20,
    product_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
    product_like: 10,
    product_image: '/none',
    created_at: new Date,
  }, {
    _id: "24",
    category_id: '89',
    product_name: '보리 펜',
    product_price: 1200,
    product_stock: 20,
    product_desc: '보리의 얼굴이 들어간 아주 깜찍한 펜',
    product_like: 10,
    product_image: '/none',
    created_at: new Date,
  }, {
    _id: "25",
    category_id: '89',
    product_name: '보리 펜',
    product_price: 1200,
    product_stock: 20,
    product_desc: '보리의 얼굴이 들어간 아주 깜찍한 펜',
    product_like: 10,
    product_image: '/none',
    created_at: new Date,
  }, {
    _id: "26",
    category_id: '89',
    product_name: '보리 펜',
    product_price: 1200,
    product_stock: 20,
    product_desc: '보리의 얼굴이 들어간 아주 깜찍한 펜',
    product_like: 10,
    product_image: '/none',
    created_at: new Date,
  }],
  categoryData: [{
    _id: "87",
    category_name:"학용품"
  }, {
    _id: "88",
    category_name:"의류"
  }, {
    _id: "89",
    category_name: "생활용품"
  }]
};