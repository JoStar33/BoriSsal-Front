import { store } from "@/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import OrderPage from "./index.page";
import userEvent from "@testing-library/user-event";
import { setUserState } from "@/store/user";
import { server } from "@/mocks/server";
import { rest } from "msw";
import { setCartState } from "@/store/cart";

const queryClient = new QueryClient();

const user = userEvent.setup();

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

// test("OrderPage 화면 반영 테스트 (데이터 반영 테스트)", async () => {
//   store.dispatch(setUserState({
//     id: "23",
//     email: "rhgfd@naver.com",
//     nick: "호우호우",
//     sns_id: "",
//     profile_image: "",
//     user_role: 0,
//     created_at: new Date(),
//     user_bori_goods_like: [],
//     user_bori_gallery_like: []
//   }))
//   initRender();
//   const addressCheck = await screen.findByText(/호랑이아파트/);
//   const emailCheck = await screen.findByText("rhgfd@naver.com");
//   const nickCheck = await screen.findByText("호우호우");
//   expect(addressCheck).toBeInTheDocument();
//   expect(emailCheck).toBeInTheDocument();
//   expect(nickCheck).toBeInTheDocument();
// });  

test("OrderPage 화면 반영 테스트 (굿즈가 없는 상태일 경우)", async () => {
  store.dispatch(setUserState({
    id: "23",
    email: "rhgfd@naver.com",
    nick: "호우호우",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  }));
  initRender();
  const clickOrder = await screen.findByRole('order-button');
  user.click(clickOrder);
  const oneGoods = await screen.findByText('최소 하나의 상품이 있어야합니다!');
  expect(oneGoods).toBeInTheDocument()
});

test("OrderPage 화면 반영 테스트 (배송지 정보가 없을경우)", async () => {
  store.dispatch(setUserState({
    id: "23",
    email: "rhgfd@naver.com",
    nick: "호우호우",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  }));
  store.dispatch(setCartState([{
    bori_goods_id: '', 
    bori_goods_name: '', 
    bori_goods_image: '', 
    bori_goods_count: 3, 
    bori_goods_price: 300000
  }]));
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/deliver-address/23`,
      (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([{
            user_id: "23",
            phone_number: "",
            address: '',
            address_detail: ''
          }]));
      }
    )
  );
  initRender();
  const clickOrder = await screen.findByRole('order-button');
  user.click(clickOrder);
  const noAddress = await screen.findByText('배송지 정보 입력을 모두 마쳐야 해요!');
  expect(noAddress).toBeInTheDocument()
});