import { ComponentStory, ComponentMeta } from "@storybook/react";
import PassWordChangeDialog from "./PassWordChangeDialog";

export default {
  title: "컴포넌트/다이얼로그/비밀번호 변경 다이얼로그 테스트",
  component: PassWordChangeDialog,
} as ComponentMeta<typeof PassWordChangeDialog>;

const Template: ComponentStory<typeof PassWordChangeDialog> = (args) => (
  <PassWordChangeDialog {...args} />
);

export const PassWordChangeDialogTest = Template.bind({});
