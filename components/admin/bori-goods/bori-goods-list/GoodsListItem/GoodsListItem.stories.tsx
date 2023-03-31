import { ComponentMeta, ComponentStory } from '@storybook/react';
import GoodsListItem from './GoodsListItem';

export default {
  title: '컴포넌트/어드민/보리굿즈/굿즈 리스트 요소',
  component: GoodsListItem,
} as ComponentMeta<typeof GoodsListItem>;

const Template: ComponentStory<typeof GoodsListItem> = (args) => <GoodsListItem {...args} />;

export const GoodsListItemTest = Template.bind({});
GoodsListItemTest.args = {
  boriGoods: {
    _id: "23",
    category_id: '88',
    bori_goods_name: '보리 티셔츠',
    bori_goods_price: 30000,
    bori_goods_stock: 20,
    bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
    bori_goods_like: 10,
    bori_goods_image: '/none',
    created_at: new Date
  },
  category: [{
    _id: "87",
    category_name:"학용품"
  }, {
    _id: "88",
    category_name:"의류"
  }, {
    _id: "89",
    category_name: "생활용품"
  }]
}
