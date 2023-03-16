import { fireEvent, waitFor, render, screen } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { server } from "@/mocks/server";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";
import FindPassWord from ".";

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
  const samePassword = await screen.findByText(/비밀번호 발급 성공! 메일을 확인해주세요./);
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