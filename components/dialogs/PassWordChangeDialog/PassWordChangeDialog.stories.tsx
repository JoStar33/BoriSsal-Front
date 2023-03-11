import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PassWordChangeDialog from './PassWordChangeDialog';

export default {
  title: '비밀번호 변경 다이얼로그 테스트',
  component: PassWordChangeDialog,
} as ComponentMeta<typeof PassWordChangeDialog>;

const queryClient = new QueryClient();

const Template: ComponentStory<typeof PassWordChangeDialog> = (args) => <QueryClientProvider client={queryClient}><PassWordChangeDialog {...args} /></QueryClientProvider>;

export const PassWordChangeDialogTest = Template.bind({});
