import { store } from "@/store";
import { waitFor, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import Oauth from "./index.page";

const queryClient = new QueryClient();

test("Oauth 화면 테스트", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Oauth />
      </Provider>
    </QueryClientProvider>
  );
  const textCheck = screen.getByText("잠시 기다려주세요!");
  expect(textCheck).toBeInTheDocument();
});