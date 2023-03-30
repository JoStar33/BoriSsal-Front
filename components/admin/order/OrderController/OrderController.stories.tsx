import { ComponentMeta, ComponentStory } from '@storybook/react';
import OrderController from './OrderController';

export default {
  title: '컴포넌트/어드민/주문/주문 조작 화면',
  component: OrderController,
} as ComponentMeta<typeof OrderController>;

const Template: ComponentStory<typeof OrderController> = () => <OrderController />;

export const OrderControllerTest = Template.bind({});