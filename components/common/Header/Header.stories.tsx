
import { useUserStore } from "@/store/user";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect } from 'react';
import Header from './Header';

export default {
  title: '컴포넌트/일반/헤드 테스트',
  component: Header,
} as ComponentMeta<typeof Header>;

const LoggedInComponent = () => {
  const { setUser } = useUserStore();
  useEffect(() => {
    setUser({
      id: "2421424325325",
      email: "",
      nick: "하오우",
      sns_id: "",
      profile_image: "",
      user_role: 0,
      created_at: new Date(),
      user_bori_goods_like: [],
      user_bori_gallery_like: []
    });
  }, []);
  return (<Header />);
}

const NotLoggedInComponent = () => {
  const { resetUser } = useUserStore();
  useEffect(() => {
    resetUser();
  }, []);
  return (<Header />);
}

const NotLoggedInComponentTemplate: ComponentStory<typeof NotLoggedInComponent> = () => <NotLoggedInComponent />;

const LoggedInComponentTemplate: ComponentStory<typeof LoggedInComponent> = () => <LoggedInComponent />;

export const HeaderNotLoggedInTest = NotLoggedInComponentTemplate.bind({});

export const HeaderTest = LoggedInComponentTemplate.bind({});