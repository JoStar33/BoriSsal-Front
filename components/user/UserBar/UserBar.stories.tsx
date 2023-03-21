import { ComponentStory, ComponentMeta } from "@storybook/react";
import { store } from "@/store";
import { Provider } from "react-redux";
import UserBar from "./UserBar";

export default {
  title: "컴포넌트/사용자/유저바 테스트",
  component: UserBar,
} as ComponentMeta<typeof UserBar>;

const Template: ComponentStory<typeof UserBar> = () => (
  <Provider store={store}>
    <UserBar />
  </Provider>
);

export const UserBarTest = Template.bind({});
