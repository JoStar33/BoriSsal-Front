import { ComponentStory, ComponentMeta } from "@storybook/react";
import DuplicateCheckPart from "./DuplicateCheckPart";
import { Provider } from "react-redux";
import { store } from "@/store";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

export default {
  title: "중복검사 컴포넌트 테스트",
  component: DuplicateCheckPart,
} as ComponentMeta<typeof DuplicateCheckPart>;

const Template: ComponentStory<typeof DuplicateCheckPart> = (args) => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <DuplicateCheckPart {...args}></DuplicateCheckPart>
    </Provider>
  </QueryClientProvider>
);

export const DuplicateCheckPartTest = Template.bind({});
DuplicateCheckPartTest.args = {
  type: true,
  info: 'email'
};

export const DuplicateCheckPartNickTest = Template.bind({});
DuplicateCheckPartNickTest.args = {
  type: false,
  info: 'nick'
};
