import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReplyViewer from './ReplyViewer';

export default {
  title: '댓글 뷰어',
  component: ReplyViewer,
} as ComponentMeta<typeof ReplyViewer>;

const Template: ComponentStory<typeof ReplyViewer> = (args) => <ReplyViewer {...args} />;

export const ReplyViewerTest = Template.bind({});
ReplyViewerTest.args = {
  reply: [{
    _id: 'string',
    user_id: 'string',
    email: 'string',
    content: 'string',
    reply_child: [],
    created_at: String(new Date()),
  }, {
    _id: 'string',
    user_id: 'string',
    email: 'string',
    content: 'string',
    reply_child: [],
    created_at:  String(new Date())
  }], 
  goods_id: '23'
}
