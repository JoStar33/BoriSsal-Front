import { store } from "@/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import Oauth from ".";


const queryClient = new QueryClient();

test("화면내에 텍스트 테스트", () => {
  render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Oauth/>
    </Provider>
  </QueryClientProvider>);
  const textCheck = screen.getByText('잠시 기다려주세요!');
  expect(textCheck).toBeInTheDocument();
});