import { ComponentStory, ComponentMeta } from '@storybook/react';
import Oauth from './index';
import { Provider } from 'react-redux';
import { store }from '@/store';

export default {
  title: 'SNS 로그인 이후 화면 테스트',
  component: Oauth,
} as ComponentMeta<typeof Oauth>;

const Template: ComponentStory<typeof Oauth> = () => <Provider store={store}><Oauth/></Provider>;

export const OauthTest = Template.bind({});