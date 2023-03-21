import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReplyChildSkeleton from './ReplyChildSkeleton';

export default {
  title: '컴포넌트/로딩/대댓글 스켈레톤',
  component: ReplyChildSkeleton,
} as ComponentMeta<typeof ReplyChildSkeleton>;

const Template: ComponentStory<typeof ReplyChildSkeleton> = () => <ReplyChildSkeleton/>;

export const ReplyChildSkeletonTest = Template.bind({});
