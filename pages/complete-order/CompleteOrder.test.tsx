
import { useCartStore } from "@/store/cart";
import { useUserStore } from "@/store/user";
import { render, renderHook, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import CompleteOrder from "./index.page";

const queryClient = new QueryClient();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <CompleteOrder></CompleteOrder>
    </QueryClientProvider>)
}

test('CompleteOrder store 반영 테스트', () => {
  const current = renderHook(() => useUserStore());
  const cartCurrent = renderHook(() => useCartStore());
  cartCurrent.result.current.setCart([{
    bori_goods_id: '23', 
    bori_goods_name: '보리 굿즈', 
    bori_goods_image: '/none', 
    bori_goods_count: 2, 
    bori_goods_price: 3000
  }]);
  current.result.current.setPageState('complete-order');
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
  expect(current.result.current.pageState).toBe('complete-order');
});

test('CompleteOrder 화면 반영 테스트', async () => {
  const current = renderHook(() => useUserStore());
  const cartCurrent = renderHook(() => useCartStore());
  cartCurrent.result.current.setCart([{
    bori_goods_id: '23', 
    bori_goods_name: '보리 굿즈', 
    bori_goods_image: '/none', 
    bori_goods_count: 2, 
    bori_goods_price: 3000
  }]);
  current.result.current.setPageState('complete-order');
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
  const orderText = await screen.findByText(/최종 결제금액:/);
  const addressText = await screen.findByText(/경기도 안양시 동안구 호랑이아파트/);
  expect(orderText).toBeInTheDocument();
  expect(addressText).toBeInTheDocument();
});
