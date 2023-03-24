
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "react-query";
import UserPage from "./index.page";
const queryClient = new QueryClient();

export default {
  title: "페이지/회원정보 페이지",
  component: UserPage,
} as ComponentMeta<typeof UserPage>;

const Template: ComponentStory<typeof UserPage> = () => (
  <QueryClientProvider client={queryClient}>
    <UserPage />
  </QueryClientProvider>
);

export const UserInfoTest = Template.bind({});
