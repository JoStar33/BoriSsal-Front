import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: '헤드 테스트',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const HeaderTest = Template.bind({});