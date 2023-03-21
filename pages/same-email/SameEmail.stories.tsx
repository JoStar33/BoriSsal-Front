import { ComponentStory, ComponentMeta } from "@storybook/react";
import SameEmail from "./index.page";

export default {
  title: "페이지/SNS 회원가입시 같은 이메일 주소로 접근한 화면",
  component: SameEmail,
} as ComponentMeta<typeof SameEmail>;

const Template: ComponentStory<typeof SameEmail> = () => (
  <SameEmail />
);

export const OauthTest = Template.bind({});
