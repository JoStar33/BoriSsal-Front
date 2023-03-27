import { server } from "@/mocks/server";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import HeaderUserPart from "./HeaderUserPart";

const queryClient = new QueryClient();

test('헤더 영역 화면 분기 테스트(로그인 했을때)', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <HeaderUserPart/>
    </QueryClientProvider>);
  const emailText = await screen.findByText(/우하하/);
  expect(emailText).toBeInTheDocument();
});

test('헤더 영역 화면 분기 테스트(로그인하지 않았을때)', async () => {
  server.use(
    rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/user`, (req, res, ctx) => {
      return res
      (
        ctx.status(500)
      );
    }),
  );
  render(
    <QueryClientProvider client={queryClient}>
      <HeaderUserPart/>
    </QueryClientProvider>);
  const loginText = await screen.findByText(/Login/);
  expect(loginText).toBeInTheDocument();
});