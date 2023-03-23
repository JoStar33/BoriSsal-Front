import { render, screen, waitFor } from "@testing-library/react";
import CompleteOrder from "./index.page";
import { Provider } from "react-redux";
import { store } from "@/store";
import { QueryClientProvider, QueryClient } from "react-query";
import { setPageState, setUserState } from "@/store/user";
import { setCartState } from "@/store/cart";

const queryClient = new QueryClient();

const initRender = () => {
  store.dispatch(setCartState([{
    bori_goods_id: '23', 
    bori_goods_name: '보리 굿즈', 
    bori_goods_image: '/none', 
    bori_goods_count: 2, 
    bori_goods_price: 3000
  }]));
  store.dispatch(setPageState('order'));
  store.dispatch(setUserState({
    id: "23",
    email: "",
    nick: "",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  }));
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CompleteOrder></CompleteOrder>
      </Provider>
    </QueryClientProvider>)
}

test('CompleteOrder store 반영 테스트', () => {
  initRender();
  expect(store.getState().userStore.pageState).toBe('order');
});

test('CompleteOrder 화면 반영 테스트', async () => {
  initRender();
  const orderText = await screen.findByText(/주문수량:/);
  const addressText = await screen.findByText(/경기도 안양시 동안구 호랑이아파트/);
  expect(orderText).toBeInTheDocument();
  expect(addressText).toBeInTheDocument();
});
