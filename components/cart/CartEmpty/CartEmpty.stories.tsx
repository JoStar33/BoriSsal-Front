import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartEmpty from './CartEmpty';

export default {
  title: '컴포넌트/장바구니/장바구니 빈 화면',
  component: CartEmpty,
} as ComponentMeta<typeof CartEmpty>;

const Template: ComponentStory<typeof CartEmpty> = () => <CartEmpty />;

export const CartEmptyTest = Template.bind({});
