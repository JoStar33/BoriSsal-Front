import { ComponentStory, ComponentMeta } from "@storybook/react";
import BoriGoodsDetail from "./index.page";

export default {
  title: "페이지/보리 굿즈 상세페이지",
  component: BoriGoodsDetail,
} as ComponentMeta<typeof BoriGoodsDetail>;

const Template: ComponentStory<typeof BoriGoodsDetail> = (args) => <BoriGoodsDetail {...args} />;

export const BoriGoodsDetailTest = Template.bind({});
BoriGoodsDetailTest.args = {
  goods: {
    _id: '25235235',
    category_id: '23',
    bori_goods_name: '상품명입니다.',
    bori_goods_price: 30000,
    bori_goods_stock: 23,
    bori_goods_desc: '테스트 텍스트입니다.',
    bori_goods_like: 23,
    bori_goods_image: '/none',
    created_at: new Date()
  },
  category: {
    _id: "23",
    category_name: "테스트 카테고리"
  },
  categoryErrorMessage: '',
  goodsErrorMessage: '',
}
