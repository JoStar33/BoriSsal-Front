import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect } from "react";
import CartPage from "./index.page";

export default {
  title: '페이지/장바구니 페이지',
  component: CartPage,
} as ComponentMeta<typeof CartPage>;
const CartPageComponent = () => {
  return (<CartPage />);
}
const Template: ComponentStory<typeof CartPageComponent> = () => <CartPageComponent/>;

export const CartPageComponentTest = Template.bind({});