import { ComponentStory, ComponentMeta } from '@storybook/react';
import CompleteOrder from './index.page';

export default {
  title: '페이지/주문 완료 페이지',
  component: CompleteOrder,
} as ComponentMeta<typeof CompleteOrder>;

const Template: ComponentStory<typeof CompleteOrder> = () => <CompleteOrder/>;

export const CompleteOrderTest = Template.bind({});
