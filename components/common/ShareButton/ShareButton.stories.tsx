import { ComponentMeta, ComponentStory } from "@storybook/react";
import ShareButton from "./ShareButton";

export default {
  title: "컴포넌트/일반/공유 버튼",
  component: ShareButton,
  argTypes: {},
} as ComponentMeta<typeof ShareButton>;

const Template: ComponentStory<typeof ShareButton> = () => <ShareButton />;

export const ShareButtonTest = Template.bind({});
