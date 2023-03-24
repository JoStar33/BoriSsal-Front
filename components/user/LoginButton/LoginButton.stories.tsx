
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoginButton from "./LoginButton";

export default {
  title: "컴포넌트/사용자/로그인버튼 테스트",
  component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = () => (
  <LoginButton />
);

export const LoginButtonTest = Template.bind({});
