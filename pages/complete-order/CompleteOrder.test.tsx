
import { useCartStore } from "@/store/cart";
import { usePageStore } from "@/store/page";
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
  const cartCurrent = renderHook(() => useCartStore());
  const pageCurrent = renderHook(() => usePageStore());
  cartCurrent.result.current.setCart([{
    bori_goods_id: '23', 
    bori_goods_name: '보리 굿즈', 
    bori_goods_image: '/none', 
    bori_goods_count: 2, 
    bori_goods_price: 3000
  }]);
  pageCurrent.result.current.setPageState('complete-order');
  initRender();
  expect(pageCurrent.result.current.pageState).toBe('complete-order');
});

test('CompleteOrder 화면 반영 테스트', async () => {
  const cartCurrent = renderHook(() => useCartStore());
  const pageCurrent = renderHook(() => usePageStore());
  cartCurrent.result.current.setCart([{
    bori_goods_id: '23', 
    bori_goods_name: '보리 굿즈', 
    bori_goods_image: '/none', 
    bori_goods_count: 2, 
    bori_goods_price: 3000
  }]);
  pageCurrent.result.current.setPageState('complete-order');
  initRender();
  const orderText = await screen.findByText(/최종 결제금액:/);
  const addressText = await screen.findByText(/경기도 안양시 동안구 호랑이아파트/);
  expect(orderText).toBeInTheDocument();
  expect(addressText).toBeInTheDocument();
});
