import { ComponentMeta, ComponentStory } from '@storybook/react';
import AdminViewerButton from './AdminViewerButton';

export default {
  title: '컴포넌트/어드민/뷰 선택 버튼',
  component: AdminViewerButton,
} as ComponentMeta<typeof AdminViewerButton>;

const Template: ComponentStory<typeof AdminViewerButton> = (args) => <AdminViewerButton {...args}/>;

const setState = jest.fn() as any;

export const AdminViewerButtonTest = Template.bind({});
AdminViewerButtonTest.args = {
  pageState: "boriGoods", 
  status: "boriGallery", 
  setPageState: setState
}

export const AdminViewerButtonPushTest = Template.bind({});
AdminViewerButtonPushTest.args = {
  pageState: "boriGallery", 
  status: "boriGallery", 
  setPageState: setState
}