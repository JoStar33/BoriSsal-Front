import { ComponentStory, ComponentMeta } from '@storybook/react';
import Login from './index';

export default {
  title: '로그인 테스트',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => <Login />;

export const LoginTest = Template.bind({});