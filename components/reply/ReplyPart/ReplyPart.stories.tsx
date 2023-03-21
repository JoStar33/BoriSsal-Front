import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReplyPart from './ReplyPart';

export default {
  title: '컴포넌트/댓글/댓글 영역',
  component: ReplyPart,
} as ComponentMeta<typeof ReplyPart>;

const Template: ComponentStory<typeof ReplyPart> = (args) => <ReplyPart {...args} />;

export const ReplyPartTest = Template.bind({});
ReplyPartTest.args = {
  reply: {
    _id: 'string',
    user_id: 'string',
    email: 'string',
    content: 'string',
    reply_child: [],
    created_at: String(new Date()),
  }
}
