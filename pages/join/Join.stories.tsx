import { ComponentStory, ComponentMeta } from "@storybook/react";
import Join from "./index.page";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

export default {
  title: "회원가입 화면 테스트",
  component: Join,
} as ComponentMeta<typeof Join>;

const Template: ComponentStory<typeof Join> = () => (
  <QueryClientProvider client={queryClient}>
    <Join />
  </QueryClientProvider>
);

export const JoinTest = Template.bind({});
