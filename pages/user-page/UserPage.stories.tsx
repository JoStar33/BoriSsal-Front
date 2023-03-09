import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserPage from './index';
import { Provider } from 'react-redux';
import { store }from '@/store';

export default {
  title: '회원정보 페이지',
  component: UserPage,
} as ComponentMeta<typeof UserPage>;

const Template: ComponentStory<typeof UserPage> = () => <Provider store={store}><UserPage/></Provider>;

export const UserInfoTest = Template.bind({});