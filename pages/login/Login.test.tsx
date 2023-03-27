import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { server } from "../../mocks/server";
import Login from "./index.page";

const user = userEvent.setup();

const queryClient = new QueryClient();

test("일반적으로 버튼을 클릭했을 경우.", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  );
  const loginButton = screen.getByRole("login");
  await user.click(loginButton).then(() => {
    const error = screen.getByText("이메일 비밀번호를 입력해주세요.");
    expect(error).toBeInTheDocument();
  });
});

test("이메일과 비밀번호를 입력후 테스트를 시도했을 경우(성공 케이스)", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  );
  const email = screen.getByRole("email");
  const password = screen.getByRole("password");
  fireEvent.change(email, { target: { value: "user12@test.com" } });
  fireEvent.change(password, { target: { value: "test123412^^" } });
  expect(password).toHaveValue("test123412^^");
  const loginButton = screen.getByRole("login");
  await user.click(loginButton);
});

test("이메일과 비밀번호를 입력후 테스트를 시도했을 경우(에러 케이스)", async () => {
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/login`,
      (req, res, ctx) => {
        return res(
          ctx.status(500), 
          ctx.json({message: '비밀번호를 잘못 입력했습니다.'}));
      }
    )
  );
  render(
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  );
  const email = screen.getByRole("email");
  const password = screen.getByRole("password");
  fireEvent.change(email, { target: { value: "user12@test.com" } });
  fireEvent.change(password, { target: { value: "test123412^^" } });
  expect(password).toHaveValue("test123412^^");
  const loginButton = screen.getByRole("login");
  await user.click(loginButton);
  const error = await screen.findByText("비밀번호를 잘못 입력했습니다.");
  expect(error).toBeInTheDocument();
});
