import { ComponentStory, ComponentMeta } from '@storybook/react';
import OrderPage from './index.page';

export default {
  title: '페이지/주문 페이지',
  component: OrderPage,
} as ComponentMeta<typeof OrderPage>;

const Template: ComponentStory<typeof OrderPage> = () => <OrderPage/>;

export const OrderPageTest = Template.bind({});
