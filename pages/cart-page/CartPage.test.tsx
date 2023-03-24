
import { useUserStore } from "@/store/user";
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
  const current = renderHook(() => useUserStore());
  current.result.current.setUser({
    id: "23",
    email: "",
    nick: "",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  });
  initRender();
  const cartText = screen.getByText(/장바구니/);
  const orderText = screen.getByText(/장바구니/);
  const goodsName = await screen.findByText(/보리 펜/);
  expect(cartText).toBeInTheDocument();
  expect(orderText).toBeInTheDocument();
  expect(goodsName).toBeInTheDocument();
})
