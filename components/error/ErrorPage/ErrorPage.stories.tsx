import { ComponentMeta, ComponentStory } from "@storybook/react";
import ErrorPage from "./ErrorPage";

export default {
  title: "컴포넌트/에러/에러페이지",
  component: ErrorPage,
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const BoriGoodsDetailTest = Template.bind({});
BoriGoodsDetailTest.args = {
  errorText: '에러메시지입니다.',
}
