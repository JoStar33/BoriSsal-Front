import { ComponentMeta, ComponentStory } from '@storybook/react';
import OrderItemSkeleton from './OrderItemSkeleton';

export default {
  title: '컴포넌트/로딩/주문 아이템 스켈레톤',
  component: OrderItemSkeleton,
} as ComponentMeta<typeof OrderItemSkeleton>;

const Template: ComponentStory<typeof OrderItemSkeleton> = () => <OrderItemSkeleton/>;

export const OrderItemSkeletonTest = Template.bind({});
