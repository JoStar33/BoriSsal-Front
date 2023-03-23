import { render, screen } from "@testing-library/react";
import CartPage from "./index.page";
import { Provider } from "react-redux";
import { store } from "@/store";
import { QueryClientProvider, QueryClient } from "react-query";
import { setUserState } from "@/store/user";

const queryClient = new QueryClient();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CartPage></CartPage>
      </Provider>
    </QueryClientProvider>)
}

test('CartPage 화면 확인', async () => {
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
  initRender();
  const cartText = screen.getByText(/장바구니/);
  const orderText = screen.getByText(/장바구니/);
  const goodsName = await screen.findByText(/보리 펜/);
  expect(cartText).toBeInTheDocument();
  expect(orderText).toBeInTheDocument();
  expect(goodsName).toBeInTheDocument();
})
