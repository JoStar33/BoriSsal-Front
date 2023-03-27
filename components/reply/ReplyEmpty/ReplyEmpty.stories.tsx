import { ComponentMeta, ComponentStory } from '@storybook/react';
import ReplyEmpty from './ReplyEmpty';

export default {
  title: '컴포넌트/댓글/댓글 빈 화면',
  component: ReplyEmpty,
} as ComponentMeta<typeof ReplyEmpty>;

const Template: ComponentStory<typeof ReplyEmpty> = () => <ReplyEmpty />;

export const ReplyEmptyTest = Template.bind({});
