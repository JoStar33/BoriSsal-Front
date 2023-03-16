import { ComponentStory, ComponentMeta } from "@storybook/react";
import FindPassWord from "./index.page";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default {
  title: "비밀번호 재발급 화면 테스트",
  component: FindPassWord,
} as ComponentMeta<typeof FindPassWord>;

const Template: ComponentStory<typeof FindPassWord> = () => (
  <QueryClientProvider client={queryClient}>
    <FindPassWord />
  </QueryClientProvider>
);

export const FindPassWordTest = Template.bind({});
