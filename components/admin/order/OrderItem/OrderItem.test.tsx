import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SetStateAction } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import OrderItem from "./OrderItem";

const queryClient = new QueryClient();

const user = userEvent.setup();

const updateOrderId = jest.fn() as any;

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <OrderItem order={{
          _id: '',
          order_date: new Date,
          price: 30000,
          order_status: '배송준비',
          order_detail: [{
            bori_goods_count: 1,
            bori_goods_id: "64196d2665890a85382a7e76",
            bori_goods_image: "/bori_goods_images/bori_cup.jpg",
            bori_goods_name: "보리 컵",
            bori_goods_price: 7000,
          }],
          email: 'rhpp',
          phone_number: '',
          address: '경기도 군포시',
          address_detail: ''
      }} updateOrderId={updateOrderId} setDialog={function (value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
      } } />
    </QueryClientProvider>
  );
};

test('주문 아이템 화면반영 테스트', () => {
  initRender();
  const deliverStatusText = screen.getByText(/배송준비/);
  const addressText = screen.getByText(/경기도 군포시/);
  const emailText = screen.getByText(/rhpp/);
  expect(deliverStatusText).toBeInTheDocument();
  expect(addressText).toBeInTheDocument();
  expect(emailText).toBeInTheDocument();
});

test('배송상태에 따른 색상 테스트(배송준비)', () => {
  initRender();
  const deliverStatus = screen.getByRole("order-status");
  expect(deliverStatus).toHaveStyle({'background-color': "#000000"});
});

test('배송상태에 따른 색상 테스트(배송중)', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <OrderItem order={{
          _id: '',
          order_date: new Date,
          price: 30000,
          order_status: '배송중',
          order_detail: [],
          email: 'rhpp',
          phone_number: '',
          address: '경기도 군포시',
          address_detail: ''
      }} updateOrderId={updateOrderId} setDialog={function (value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
      } } />
    </QueryClientProvider>
  );
  const deliverStatus = screen.getByRole("order-status");
  expect(deliverStatus).toHaveStyle({'background-color': "#5B59C1"});
});

test('배송상태에 따른 색상 테스트(배송완료)', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <OrderItem order={{
          _id: '',
          order_date: new Date,
          price: 30000,
          order_status: '배송완료',
          order_detail: [],
          email: 'rhpp',
          phone_number: '',
          address: '경기도 군포시',
          address_detail: ''
      }} updateOrderId={updateOrderId} setDialog={function (value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
      } } />
    </QueryClientProvider>
  );
  const deliverStatus = screen.getByRole("order-status");
  expect(deliverStatus).toHaveStyle({'background-color': "#4DC667"});
});

test('주문한 상품 목록 확인 테스트', () => {
  initRender();
  const goodsListButton = screen.getByRole("goods-list");
  user.click(goodsListButton).then(() => {
    const goodsName = screen.findByText(/보리 컵/);
    expect(goodsName).toBeInTheDocument();
  })
});