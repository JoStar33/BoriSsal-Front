import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartItem from './CartItem';

export default {
  title: '컴포넌트/장바구니/장바구니 아이템',
  component: CartItem,
} as ComponentMeta<typeof CartItem>;

const Template: ComponentStory<typeof CartItem> = (args) => <CartItem {...args} />;

export const CartItemTest = Template.bind({});
CartItemTest.args = {
  cartGoods: {
    bori_goods_id: '3124', 
    bori_goods_name: '굿즈 테스트', 
    bori_goods_image: '/none', 
    bori_goods_count: 3, 
    bori_goods_price: 20000
  }
}
