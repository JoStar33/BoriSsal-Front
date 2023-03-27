import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import OrderHistoryPage from "./index.page";

const queryClient = new QueryClient();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <OrderHistoryPage />
    </QueryClientProvider>
  );
};

test("화면 반영 테스트", () => {
  initRender();
  const orderText = screen.getByText(/주문 내역/);
  expect(orderText).toBeInTheDocument();
})
