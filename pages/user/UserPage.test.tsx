import { store } from "@/store";
import { waitFor, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import UserPage from "./index.page";

const queryClient = new QueryClient();

test("UserPage 화면 테스트", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UserPage />
      </Provider>
    </QueryClientProvider>
  );
  const textCheck = screen.getByText("회원 이메일:");
  expect(textCheck).toBeInTheDocument();
});
