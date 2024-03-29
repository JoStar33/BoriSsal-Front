import StatusContainer from '@/components/common/StatusContainer/StatusContainer';
import { IReplyMutation } from '@/types/reply';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider, QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query';
import ReplyViewer from './ReplyViewer';
const mutationInitData = {
  bori_goods_reply: [
    {
      _id: 'string',
      user_id: 'string',
      email: 'string',
      content: 'string',
      reply_child: [],
      created_at: String(new Date()),
    },
    {
      _id: 'string',
      user_id: 'string',
      email: 'string',
      content: 'string',
      reply_child: [],
      created_at: String(new Date()),
    },
  ],
  bori_gallery_reply: [],
  overflow: false,
};
const queryClient = new QueryClient();
const user = userEvent.setup();

const setState = jest.fn() as any;

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer />
      <ReplyViewer
        goods_id={'23'}
        mutationData={mutationInitData}
        limit={1}
        setLimit={setState}
        refetch={function <TPageData>(
          options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
        ): Promise<QueryObserverResult<IReplyMutation, unknown>> {
          throw new Error('Function not implemented.');
        }}
        user={{
          email: '',
          nick: '',
          sns_id: '',
          profile_image: '',
          created_at: new Date(),
          user_bori_goods_like: [],
          user_bori_gallery_like: [],
        }}
      />
    </QueryClientProvider>,
  );
};

test('화면 반영 테스트', () => {
  initRender();
  const replyText = screen.getByText(/댓글:/);
  const replyRegistButton = screen.getByText(/댓글 등록/);
  expect(replyText).toBeInTheDocument();
  expect(replyRegistButton).toBeInTheDocument();
});

test('댓글 입력후 댓글 등록시에 (로그인을 하지 않았을시에)', async () => {
  initRender();
  const replyRegistButton = screen.getByRole('regist');
  const replyInput = screen.getByRole('reply-input');
  fireEvent.change(replyInput, { target: { value: '헬로우헬로우' } });
  await user.click(replyRegistButton);
  const notLoginText = await screen.findByText(/로그인후 이용해주세요!/);
  expect(notLoginText).toBeInTheDocument();
});

test('댓글 등록시에 (댓글의 글자가 없을경우)', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer />
      <ReplyViewer
        goods_id={'23'}
        mutationData={mutationInitData}
        limit={1}
        setLimit={setState}
        refetch={function <TPageData>(
          options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
        ): Promise<QueryObserverResult<IReplyMutation, unknown>> {
          throw new Error('Function not implemented.');
        }}
        user={{
          email: 'rhwdf@gmail.com',
          nick: '우하하',
          sns_id: '',
          profile_image: '',
          created_at: new Date(),
          user_bori_goods_like: [],
          user_bori_gallery_like: [],
        }}
      />
    </QueryClientProvider>,
  );
  const replyRegistButton = screen.getByRole('regist');
  const replyInput = screen.getByRole('reply-input');
  fireEvent.change(replyInput, { target: { value: '' } });
  await user.click(replyRegistButton);
  const notLoginText = await screen.findByText(/최소 두글자는 입력해주세요!/);
  expect(notLoginText).toBeInTheDocument();
});
