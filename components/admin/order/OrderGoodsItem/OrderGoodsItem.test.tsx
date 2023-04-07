import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import OrderGoodsItem from "./OrderGoodsItem";

const queryClient = new QueryClient();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <OrderGoodsItem boriGoods={{
        bori_goods_id: "23",
        bori_goods_name: "보리 필통",
        bori_goods_image: "/none",
        bori_goods_count: 10,
        bori_goods_price: 30000
      }} />
    </QueryClientProvider>
  );
};

test('주문 굿즈 아이템 화면반영 테스트', () => {
  initRender();
  const goodsName = screen.getByText(/보리 필통/);
  const goodsPrice = screen.getByText(/30000/);
  expect(goodsName).toBeInTheDocument();
  expect(goodsPrice).toBeInTheDocument();
});

