import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loading from './Loading';

export default {
  title: '컴포넌트/로딩/로딩 화면 테스트',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading/>;

export const LoadingTest = Template.bind({});