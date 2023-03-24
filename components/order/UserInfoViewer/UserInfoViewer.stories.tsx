import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserInfoViewer from './UserInfoViewer';

export default {
  title: '컴포넌트/장바구니/장바구니 아이템',
  component: UserInfoViewer,
} as ComponentMeta<typeof UserInfoViewer>;

const Template: ComponentStory<typeof UserInfoViewer> = () => <UserInfoViewer />;

export const UserInfoViewerTest = Template.bind({});