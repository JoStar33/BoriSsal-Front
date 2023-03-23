import { ComponentStory, ComponentMeta } from "@storybook/react";
import CartPage from "./index.page";
import { store } from "@/store";
import { setUserState } from "@/store/user";

export default {
  title: '페이지/장바구니 페이지',
  component: CartPage,
} as ComponentMeta<typeof CartPage>;
store.dispatch(setUserState({
  id: "23",
  email: "rhwkd3030@naver.com",
  nick: "히얼",
  sns_id: "2231",
  profile_image: "/none",
  user_role: 0,
  created_at: new Date(),
  user_bori_goods_like: [],
  user_bori_gallery_like: []
}));
const Template: ComponentStory<typeof CartPage> = () => <CartPage/>;

export const CartPageTest = Template.bind({});