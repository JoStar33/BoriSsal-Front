import { ComponentMeta, ComponentStory } from '@storybook/react';
import AdminPage from './index.page';

export default {
  title: '페이지/어드민 페이지',
  component: AdminPage,
} as ComponentMeta<typeof AdminPage>;
const setState = jest.fn() as any;
const Template: ComponentStory<typeof AdminPage> = () => <AdminPage/>;

export const AdminPageTest = Template.bind({});