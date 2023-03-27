
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import OrderHistoryItem from "./OrderHistoryItem";
const queryClient = new QueryClient();
const user = userEvent.setup();

const initRender = (deliverStatus: string) => {
  render(
    <QueryClientProvider client={queryClient}>
      <OrderHistoryItem   
        deliverAddress={{
          _id: '23',
          phone_number: "01033332222",
          address: '경기도 안양시 동안구 호랑이아파트',
          address_detail: '102동 304호'
        }} 
        order={{
          order_date: new Date,
          order_detail: [
            {
              bori_goods_count: 1,
              bori_goods_id: "64196d2665890a85382a7e76",
              bori_goods_image: "/bori_goods_images/bori_cup.jpg",
              bori_goods_name: "보리 컵",
              bori_goods_price: 7000,
            },
          ],
          order_status: deliverStatus,
          price: 7000,
          _id: "23",
        }}></OrderHistoryItem>
    </QueryClientProvider>
  );
};

test("주문내역 아이템 화면 반영 테스트", async () => {
  initRender("배송준비");
  const replyText = screen.getByText(/주문내역/);
  const addressText = screen.getByText(/호랑이아파트/);
  const phoneText = screen.getByText(/01033332222/);
  expect(replyText).toBeInTheDocument();
  expect(addressText).toBeInTheDocument();
  expect(phoneText).toBeInTheDocument();
});

test("주문내역 아이템 화면 반영 테스트(주문 상품 테스트)", async () => {
  initRender("배송준비");
  const showGoodsButton = screen.getByRole("show-goods");
  await user.click(showGoodsButton);
  const goodsName = await screen.findByText(/보리 컵/);
  expect(goodsName).toBeInTheDocument();
});

test("주문 상태에 따른 텍스트 변화 테스트", async () => {
  initRender("배송완료");
  const deliverStatus = screen.getByRole("deliver-status");
  const styles = getComputedStyle(deliverStatus);
  expect(styles.color).toBe('rgb(77, 198, 103)');
});