import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { server } from "../../mocks/server";
import Join from "./index.page";

const user = userEvent.setup();

const queryClient = new QueryClient();

test("회원가입에서 일반적으로 버튼을 클릭했을 경우.", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <Join />
    </QueryClientProvider>
  );
  const loginButton = screen.getByRole("join");
  await user.click(loginButton).then(() => {
    const error = screen.getByText("닉네임 이메일 비밀번호를 입력해주세요.");
    expect(error).toBeInTheDocument();
  });
});

test("회원가입에서 정상적으로 모든 input을 입력후 테스트를 시도했을 경우(실패 케이스)", async () => {
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/join`,
      (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({message: '회원가입 실패'})
        );
      }
    )
  );
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <Join />
    </QueryClientProvider>
  );
  const email = screen.getByRole("email");
  const nick = screen.getByRole("nick");
  const password = screen.getByRole("password");
  const passwordCheck = screen.getByRole("passwordCheck");
  fireEvent.change(email, { target: { value: "user12@test.com" } });
  fireEvent.change(nick, { target: { value: "호호호호" } });
  fireEvent.change(password, { target: { value: "test123412^^" } });
  fireEvent.change(passwordCheck, { target: { value: "test123412^^" } });
  const loginButton = screen.getByRole("join");
  await user.click(loginButton);
  const error = await screen.findByText("회원가입 실패");
  expect(error).toBeInTheDocument();
});
