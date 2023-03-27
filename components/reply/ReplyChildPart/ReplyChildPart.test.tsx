import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReplyChildPart from "./ReplyChildPart";
const user = userEvent.setup();


const initRender = () => {
  render(
    <ReplyChildPart replyChild={{
      email: 'rhwdd123',
      content: '헬로우 헬로우',
      created_at:  String(new Date())
    }}></ReplyChildPart>
  );
}

test("ReplyChildPart 화면 반영 테스트", async () => {
  initRender();
  const emailText = screen.getByText(/rhwdd123/);
  const contentText = screen.getByText(/헬로우/);
  expect(emailText).toBeInTheDocument();
  expect(contentText).toBeInTheDocument();
});

