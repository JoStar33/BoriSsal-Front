import { ComponentStory, ComponentMeta } from "@storybook/react";
import Custom404 from "./index.page";

export default {
  title: "404 화면",
  component: Custom404,
} as ComponentMeta<typeof Custom404>;

const Template: ComponentStory<typeof Custom404> = () => (
  <Custom404 />
);

export const Custom404Test = Template.bind({});
