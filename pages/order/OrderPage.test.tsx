import { store } from "@/store";
import { waitFor, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import OrderPage from "./index.page";

const queryClient = new QueryClient();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <OrderPage />
      </Provider>
    </QueryClientProvider>
  );
}

test("OrderPage 화면 반영 테스트", () => {
  initRender();
  const emailCheck = screen.getByText("이메일:");
  const nickCheck = screen.getByText("유저 닉네임:");
  const titleCheck = screen.getByText("배송지 정보");
  const priceCheck = screen.getByText("최종 결제금액:");
  const orderButtonCheck = screen.getByText("주문하기");
  expect(emailCheck).toBeInTheDocument();
  expect(nickCheck).toBeInTheDocument();
  expect(titleCheck).toBeInTheDocument();
  expect(priceCheck).toBeInTheDocument();
  expect(orderButtonCheck).toBeInTheDocument();
});