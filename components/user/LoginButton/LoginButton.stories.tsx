import { store } from "@/store";
import { Provider } from "react-redux";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoginButton from "./LoginButton";

export default {
  title: "로그인버튼 테스트",
  component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = () => (
  <Provider store={store}>
    <LoginButton />
  </Provider>
);

export const LoginButtonTest = Template.bind({});
