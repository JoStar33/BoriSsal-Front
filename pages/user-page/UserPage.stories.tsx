import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserPage from "./index.page";
import { Provider } from "react-redux";
import { store } from "@/store";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default {
  title: "회원정보 페이지",
  component: UserPage,
} as ComponentMeta<typeof UserPage>;

const Template: ComponentStory<typeof UserPage> = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <UserPage />
    </Provider>
  </QueryClientProvider>
);

export const UserInfoTest = Template.bind({});
