
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Oauth from "./index.page";
const queryClient = new QueryClient();

export default {
  title: "페이지/SNS 로그인 이후 화면 테스트",
  component: Oauth,
} as ComponentMeta<typeof Oauth>;

const Template: ComponentStory<typeof Oauth> = () => (
  <QueryClientProvider client={queryClient}>
    <Oauth />
  </QueryClientProvider>
);

export const OauthTest = Template.bind({});
