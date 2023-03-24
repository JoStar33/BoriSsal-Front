import { useUserStore } from "@/store/user";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import CartItem from "./CartItem";

const queryClient = new QueryClient();

const initRender = (cart_id: string) => {
  const current = renderHook(() => useUserStore());
  render(
    <QueryClientProvider client={queryClient}>
      <CartItem cart_id={cart_id} cartGoods={{
        bori_goods_id: '23',
        bori_goods_name: '보리쌀',
        bori_goods_image: '/none',
        bori_goods_count: 0,
        bori_goods_price: 0,
      }}/>
    </QueryClientProvider>);
  return {
    current
  }
}

test('카트 아이템 렌더링 테스트(cart_id: null, complete-order: X)', () => {
  initRender('');
  const cartItemName = screen.getByText(/보리쌀/);
  const countDownButton = screen.getByRole('count-down-button');
  expect(cartItemName).toBeInTheDocument();
  expect(countDownButton).toBeInTheDocument();
});

test('카트 아이템 렌더링 테스트(cart_id: 23, complete-order: X)', () => {
  initRender('23');
  const cartItemName = screen.getByText(/보리쌀/);
  const countInput = screen.getByRole('count-input');
  expect(cartItemName).toBeInTheDocument();
  expect(countInput).toBeInTheDocument();
});

test('카트 아이템 렌더링 테스트(cart_id: null, complete-order: O)', async () => {
  const { current } = initRender('');
  current.result.current.setPageState('complete-order');
  const cartItemName = screen.getByText(/보리쌀/);
  const countDownButton = await screen.findByRole('count-down-button');
  expect(cartItemName).toBeInTheDocument();
  expect(countDownButton).not.toBeInTheDocument();
});

test('카트 아이템 인풋 반영 테스트(cart_id: 23, complete-order: X)', async () => {
  const { current } = initRender('23');
  current.result.current.setPageState('');
  const cartItemName = screen.getByText(/보리쌀/);
  const countInput = screen.getByRole('count-input');
  fireEvent.change(countInput, { target: { value: 12345 } });
  const validateText = await screen.findByText(/10개이상 구매가 불가능합니다./);
  expect(cartItemName).toBeInTheDocument();
  expect(countInput).toBeInTheDocument();
  expect(validateText).toBeInTheDocument();
});