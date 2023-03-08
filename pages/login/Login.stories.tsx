import { ComponentStory, ComponentMeta } from '@storybook/react';
import Login from './index';
import { Provider } from 'react-redux';
import { store }from '@/store';
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

export default {
  title: '로그인 화면 테스트',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => <QueryClientProvider client={queryClient}><Provider store={store}><Login/></Provider></QueryClientProvider>;

export const LoginTest = Template.bind({});