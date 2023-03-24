
import { useUserStore } from "@/store/user";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect } from 'react';
import HeaderUserPart from './HeaderUserPart';

export default {
  title: '컴포넌트/일반/헤더 구분 영역',
  component: HeaderUserPart,
} as ComponentMeta<typeof HeaderUserPart>;

const HeaderUserPartLoggedInComponent = () => {
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
  return (<HeaderUserPart />);
};

const HeaderNotLoggedInComponent = () => {
  const { resetUser } = useUserStore();
  useEffect(() => {
    resetUser();
  }, []);
  return (<HeaderUserPart />);
}

const HeaderLoggedInComponentTemplate: ComponentStory<typeof HeaderUserPartLoggedInComponent> = () => <HeaderUserPartLoggedInComponent />;
export const HeaderNotLoggedInTest = HeaderLoggedInComponentTemplate.bind({});

const HeaderNotLoggedInComponentTemplate: ComponentStory<typeof HeaderNotLoggedInComponent> = () => <HeaderNotLoggedInComponent />;
export const HeaderNotLoggedInComponentTest = HeaderNotLoggedInComponentTemplate.bind({});

