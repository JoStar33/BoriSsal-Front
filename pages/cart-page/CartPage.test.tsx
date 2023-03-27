
import { server } from "@/mocks/server";
import { useCartStore } from "@/store/cart";
import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import CartPage from "./index.page";

const queryClient = new QueryClient();

const user = userEvent.setup();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <CartPage></CartPage>
    </QueryClientProvider>)
}

test('CartPage 화면상에 장바구니에 담은 상품이 없을 경우', async () => {
  server.use(
    rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/cart`, (req, res, ctx) => {
      return res(
        ctx.status(500)
      );
    })
  );
  initRender();
  const cartText = await screen.findByText(/장바구니가 비어있습니다./);
  const goodsButton = await screen.findByText(/굿즈보러 가기/);
  expect(cartText).toBeInTheDocument();
  expect(goodsButton).toBeInTheDocument();
});


test('CartPage 화면 확인', async () => {
  initRender();
  const cartText = await screen.findByText(/장바구니/);
  const goodsName = await screen.findByText(/보리 펜/);
  expect(cartText).toBeInTheDocument();
  expect(goodsName).toBeInTheDocument();
});


test('CartPage에서 장바구니에 담긴 상품을 store로 전달하는지 테스트', async () => {
  const current = renderHook(() =>  useCartStore());
  initRender();
  const orderButton = await screen.findByRole("order")
  await user.click(orderButton);
  expect(current.result.current.cart[0].bori_goods_name).toBe("보리 펜");
});