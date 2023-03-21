import { ComponentStory, ComponentMeta } from "@storybook/react";
import Oauth from "./index.page";
import { Provider } from "react-redux";
import { store } from "@/store";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default {
  title: "페이지/SNS 로그인 이후 화면 테스트",
  component: Oauth,
} as ComponentMeta<typeof Oauth>;

const Template: ComponentStory<typeof Oauth> = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Oauth />
    </Provider>
  </QueryClientProvider>
);

export const OauthTest = Template.bind({});
