import { ComponentMeta, ComponentStory } from '@storybook/react';
import AdminChecker from './AdminChecker';

export default {
  title: '컴포넌트/어드민/어드민 확인 화면',
  component: AdminChecker,
} as ComponentMeta<typeof AdminChecker>;
const setState = jest.fn() as any;
const Template: ComponentStory<typeof AdminChecker> = (args) => <AdminChecker {...args}/>;

export const AdminCheckerTest = Template.bind({});