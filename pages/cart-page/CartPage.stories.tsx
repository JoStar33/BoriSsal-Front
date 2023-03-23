import { ComponentStory, ComponentMeta } from "@storybook/react";
import CartPage from "./index.page";
import { store } from "@/store";
import { setPageState } from "@/store/user";

export default {
  title: '페이지/장바구니 페이지',
  component: CartPage,
} as ComponentMeta<typeof CartPage>;
store.dispatch(setPageState('order'));
const Template: ComponentStory<typeof CartPage> = () => <CartPage/>;

export const CartPageTest = Template.bind({});