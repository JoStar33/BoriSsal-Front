
import { useUserStore } from "@/store/user";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect } from "react";
import CartPage from "./index.page";

export default {
  title: '페이지/장바구니 페이지',
  component: CartPage,
} as ComponentMeta<typeof CartPage>;
const CartPageComponent = () => {
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
  return (<CartPage />);
}
const Template: ComponentStory<typeof CartPageComponent> = () => <CartPageComponent/>;

export const CartPageComponentTest = Template.bind({});