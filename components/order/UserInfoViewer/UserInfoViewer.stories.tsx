import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserInfoViewer from './UserInfoViewer';

export default {
  title: '컴포넌트/장바구니/장바구니 아이템',
  component: UserInfoViewer,
} as ComponentMeta<typeof UserInfoViewer>;

const Template: ComponentStory<typeof UserInfoViewer> = () => <UserInfoViewer user={{
  email: "",
  nick: "",
  sns_id: "",
  profile_image: "",
  created_at: new Date(),
  user_bori_goods_like: [],
  user_bori_gallery_like: [],
}} />;

export const UserInfoViewerTest = Template.bind({});