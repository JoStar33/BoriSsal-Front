
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import ReplyPart from "./ReplyPart";
const queryClient = new QueryClient();
const user = userEvent.setup();

const validateText = jest.fn() as any;

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ReplyPart 
      user={{
        email: 'rhwdf@gmail.com',
        nick: '우하하',
        sns_id: '', 
        profile_image: '', 
        created_at: new Date,
        user_bori_goods_like: [],
        user_bori_gallery_like: []
      }}
      reply={{
      _id: 'qwewqe',
      email: 'rhwdd123',
      content: '헬로우 헬로우',
      reply_child: [],
      created_at: String(new Date())
    }} isGoods={true}></ReplyPart>
    </QueryClientProvider>
  );
}

test("화면 반영 테스트", async () => {
  initRender();
  const replyText = screen.getByText(/답글/);
  const childReplyButton = screen.getByRole('child-reply');
  user.click(childReplyButton);
  const replyRegistButton = await screen.findByText(/댓글 등록/);
  expect(replyText).toBeInTheDocument();
  expect(replyRegistButton).toBeInTheDocument();
});


test("화면 반영 테스트(유저 정보)", async () => {
  initRender();
  const emailText = screen.getByText(/rhwdd123/);
  const contentText = screen.getByText(/헬로우/);
  expect(emailText).toBeInTheDocument();
  expect(contentText).toBeInTheDocument();
});
