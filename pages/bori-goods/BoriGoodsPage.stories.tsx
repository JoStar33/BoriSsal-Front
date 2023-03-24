import { ComponentStory, ComponentMeta } from "@storybook/react";
import BoriGoodsPage from "./index.page";

export default {
  title: '페이지/보리 굿즈페이지 테스트',
  component: BoriGoodsPage,
} as ComponentMeta<typeof BoriGoodsPage>;

const Template: ComponentStory<typeof BoriGoodsPage> = (args) => <BoriGoodsPage {...args} />;

export const BoriGoodsPageTest = Template.bind({});
BoriGoodsPageTest.args = {
  goodsData: [{
    _id: "23",
    category_id: '88',
    bori_goods_name: '보리 티셔츠',
    bori_goods_price: 30000,
    bori_goods_stock: 20,
    bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
    bori_goods_like: 10,
    bori_goods_image: '/none',
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
    bori_goods_name: '보리 티셔츠',
    bori_goods_price: 30000,
    bori_goods_stock: 20,
    bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
    bori_goods_like: 10,
    bori_goods_image: '/none',
    created_at: new Date,
  }, {
    _id: "24",
    category_id: '89',
    bori_goods_name: '보리 펜',
    bori_goods_price: 1200,
    bori_goods_stock: 20,
    bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 펜',
    bori_goods_like: 10,
    bori_goods_image: '/none',
    created_at: new Date,
  }, {
    _id: "25",
    category_id: '89',
    bori_goods_name: '보리 펜',
    bori_goods_price: 1200,
    bori_goods_stock: 20,
    bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 펜',
    bori_goods_like: 10,
    bori_goods_image: '/none',
    created_at: new Date,
  }, {
    _id: "26",
    category_id: '89',
    bori_goods_name: '보리 펜',
    bori_goods_price: 1200,
    bori_goods_stock: 20,
    bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 펜',
    bori_goods_like: 10,
    bori_goods_image: '/none',
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