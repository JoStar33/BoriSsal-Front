import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReplyLoading from './ReplyLoading';

export default {
  title: '컴포넌트/로딩/댓글 뷰어 스켈레톤',
  component: ReplyLoading,
} as ComponentMeta<typeof ReplyLoading>;

const Template: ComponentStory<typeof ReplyLoading> = () => <ReplyLoading/>;

export const ReplyLoadingTest = Template.bind({});
