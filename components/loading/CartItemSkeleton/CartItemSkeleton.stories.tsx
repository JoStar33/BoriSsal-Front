import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartItemSkeleton from './CartItemSkeleton';

export default {
  title: '컴포넌트/로딩/장바구니 아이템 스켈레톤',
  component: CartItemSkeleton,
} as ComponentMeta<typeof CartItemSkeleton>;

const Template: ComponentStory<typeof CartItemSkeleton> = () => <CartItemSkeleton/>;

export const CartItemSkeletonTest = Template.bind({});
