
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./index.page";
const queryClient = new QueryClient();

export default {
  title: "페이지/로그인 화면 테스트",
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => (
  <QueryClientProvider client={queryClient}>
    <Login />
  </QueryClientProvider>
);

export const LoginTest = Template.bind({});
