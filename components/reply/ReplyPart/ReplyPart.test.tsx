import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReplyPart from "./ReplyPart";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/store";
const queryClient = new QueryClient();
const user = userEvent.setup();

const validateText = jest.fn() as any;

const initRender = () => {
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReplyPart reply={{
        _id: 'qwewqe',
        user_id: 'dgfdg',
        email: 'rhwdd123',
        content: '헬로우 헬로우',
        reply_child: [],
        created_at: String(new Date())
      }} setDialog={function (value: React.SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
      } } validateText={validateText}></ReplyPart>
      </QueryClientProvider>
    </Provider>
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
