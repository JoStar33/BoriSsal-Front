
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Oauth from "./index.page";

const queryClient = new QueryClient();

test("Oauth 화면 테스트", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Oauth />
    </QueryClientProvider>
  );
  const textCheck = screen.getByText("잠시 기다려주세요!");
  expect(textCheck).toBeInTheDocument();
});