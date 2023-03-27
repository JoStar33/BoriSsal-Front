import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReplyChildPart from './ReplyChildPart';

export default {
  title: '컴포넌트/댓글/대댓글 영역',
  component: ReplyChildPart,
} as ComponentMeta<typeof ReplyChildPart>;

const Template: ComponentStory<typeof ReplyChildPart> = (args) => <ReplyChildPart {...args} />;

export const ReplyPartTest = Template.bind({});
ReplyPartTest.args = {
  replyChild: {
    email: 'string',
    content: 'string',
    created_at: String(new Date()),
  }
}
