import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import DuplicateCheckPart from './DuplicateCheckPart';
const queryClient = new QueryClient();

export default {
  title: '컴포넌트/사용자/중복검사 컴포넌트 테스트',
  component: DuplicateCheckPart,
} as ComponentMeta<typeof DuplicateCheckPart>;

const Template: ComponentStory<typeof DuplicateCheckPart> = (args) => (
  <QueryClientProvider client={queryClient}>
    <DuplicateCheckPart {...args} />
  </QueryClientProvider>
);

export const DuplicateCheckPartTest = Template.bind({});
DuplicateCheckPartTest.args = {
  type: true,
  info: 'email',
};

export const DuplicateCheckPartNickTest = Template.bind({});
DuplicateCheckPartNickTest.args = {
  type: false,
  info: 'nick',
};
