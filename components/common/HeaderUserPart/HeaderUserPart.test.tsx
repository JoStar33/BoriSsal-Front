import { render, renderHook, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import HeaderUserPart from "./HeaderUserPart";

const queryClient = new QueryClient();

test('헤더 영역 화면 분기 테스트', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <HeaderUserPart/>
    </QueryClientProvider>);
  const emailText = await screen.findByText(/호스스/);
  expect(emailText).toBeInTheDocument();
});

test('헤더 영역 화면 분기 테스트', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <HeaderUserPart/>
    </QueryClientProvider>);
  const loginText = await screen.findByText(/Login/);
  expect(loginText).toBeInTheDocument();
});