import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { server } from "@/mocks/server";
import { useCartStore } from "@/store/cart";
import { usePageStore } from "@/store/page";
import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import OrderPage from "./index.page";

const queryClient = new QueryClient();

const user = userEvent.setup();

const initRender = () => {
  const pageCurrent = renderHook(() => usePageStore());
  pageCurrent.result.current.setPageState('order')
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <OrderPage />
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


test("OrderPage 화면 반영 테스트 (굿즈가 없는 상태일 경우)", async () => {
  initRender();
  const clickOrder = await screen.findByRole('order-button');
  user.click(clickOrder);
  const oneGoods = await screen.findByText('최소 하나의 상품이 있어야합니다!');
  expect(oneGoods).toBeInTheDocument()
});

test("OrderPage 화면 반영 테스트 (배송지 정보가 없을경우)", async () => {
  const cartCurrent = renderHook(() => useCartStore());
  cartCurrent.result.current.setCart([{
    bori_goods_id: '', 
    bori_goods_name: '', 
    bori_goods_image: '', 
    bori_goods_count: 3, 
    bori_goods_price: 300000
  }]);
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/deliver-address`,
      (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([{
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