import { ComponentMeta, ComponentStory } from '@storybook/react';
import OrderEmpty from './OrderEmpty';

export default {
  title: '컴포넌트/주문/빈 주문내역 화면',
  component: OrderEmpty,
} as ComponentMeta<typeof OrderEmpty>;

const Template: ComponentStory<typeof OrderEmpty> = () => <OrderEmpty />;

export const OrderEmptyTest = Template.bind({});
