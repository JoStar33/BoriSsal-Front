import { server } from "@/mocks/server";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import FindPassWord from "./index.page";

const user = userEvent.setup();

const queryClient = new QueryClient();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <FindPassWord />
    </QueryClientProvider>
  );
};

test('임시 비밀번호 발급 테스트(성공 케이스)', async () => {
  initRender();
  const email = screen.getByRole("email");
  const button = screen.getByRole("button");
  fireEvent.change(email, { target: { value: "rhwe@naver.com" } });
  user.click(button);
  const samePassword = await screen.findByText(/임시비밀번호가 메일로 전송됐습니다!/);
  expect(samePassword).toBeInTheDocument();
});


test('임시 비밀번호 발급 테스트(실패 케이스)', async () => {
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/find/password`,
      (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({
            message: '메일서버 이상발생!'
          }));
      }
    )
  );
  initRender();
  const email = screen.getByRole("email");
  const button = screen.getByRole("button");
  fireEvent.change(email, { target: { value: "rhwe@naver.com" } });
  user.click(button);
  const samePassword = await screen.findByText(/메일서버 이상발생!/);
  expect(samePassword).toBeInTheDocument();
});