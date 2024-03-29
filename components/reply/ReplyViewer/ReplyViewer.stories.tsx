import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReplyViewer from './ReplyViewer';

export default {
  title: '컴포넌트/댓글/댓글 뷰어',
  component: ReplyViewer,
} as ComponentMeta<typeof ReplyViewer>;

const Template: ComponentStory<typeof ReplyViewer> = (args) => <ReplyViewer {...args} />;

export const ReplyViewerTest = Template.bind({});
ReplyViewerTest.args = {
  mutationData: {
    bori_goods_reply: [{
      _id: 'string',
      email: 'string',
      content: 'string',
      reply_child: [],
      created_at: String(new Date()),
    }, {
      _id: 'string',
      email: 'string',
      content: 'string',
      reply_child: [],
      created_at:  String(new Date())
    }],
    bori_gallery_reply: [],
    overflow: true
  },
  limit: 1,
  goods_id: '23'
}
