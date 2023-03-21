import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReplySkeleton from './ReplySkeleton';

export default {
  title: '컴포넌트/로딩/댓글 스켈레톤',
  component: ReplySkeleton,
} as ComponentMeta<typeof ReplySkeleton>;

const Template: ComponentStory<typeof ReplySkeleton> = () => <ReplySkeleton/>;

export const ReplySkeletonTest = Template.bind({});
