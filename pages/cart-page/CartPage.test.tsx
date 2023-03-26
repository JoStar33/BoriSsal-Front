
import { render, renderHook, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import CartPage from "./index.page";

const queryClient = new QueryClient();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <CartPage></CartPage>
    </QueryClientProvider>)
}

test('CartPage 화면 확인', async () => {
  initRender();
  const cartText = screen.getByText(/장바구니/);
  const orderText = screen.getByText(/장바구니/);
  const goodsName = await screen.findByText(/보리 펜/);
  expect(cartText).toBeInTheDocument();
  expect(orderText).toBeInTheDocument();
  expect(goodsName).toBeInTheDocument();
})
