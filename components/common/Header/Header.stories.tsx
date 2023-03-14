import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';
import { store }from '@/store';
import { Provider, useDispatch } from "react-redux";
import { setUserState, resetUserState } from "@/store/user";
import { useEffect } from 'react';

export default {
  title: '헤드 테스트',
  component: Header,
} as ComponentMeta<typeof Header>;

const LoggedInComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserState({
      id: "2421424325325",
      email: "",
      nick: "하오우",
      sns_id: "",
      profile_image: "",
      user_role: 0,
      created_at: new Date(),
      user_product_like: [],
      user_bori_gallery_like: []
    }));
  });
  return (<Header />);
}

const NotLoggedInComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetUserState());
  });
  return (<Header />);
}

const NotLoggedInComponentTemplate: ComponentStory<typeof NotLoggedInComponent> = () => <NotLoggedInComponent />;

const LoggedInComponentTemplate: ComponentStory<typeof LoggedInComponent> = () => <LoggedInComponent />;

export const HeaderNotLoggedInTest = NotLoggedInComponentTemplate.bind({});

export const HeaderTest = LoggedInComponentTemplate.bind({});