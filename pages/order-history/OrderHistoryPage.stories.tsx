import { ComponentMeta, ComponentStory } from '@storybook/react';
import OrderHistoryPage from './index.page';

export default {
  title: '페이지/주문내역 페이지',
  component: OrderHistoryPage,
} as ComponentMeta<typeof OrderHistoryPage>;

const OrderHistoryPageComponent = () => {
  return (<OrderHistoryPage />);
}

const Template: ComponentStory<typeof OrderHistoryPageComponent> = () => <OrderHistoryPageComponent/>;

export const OrderHistoryPageTest = Template.bind({});
