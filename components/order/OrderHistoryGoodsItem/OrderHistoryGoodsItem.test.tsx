import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import OrderHistoryGoodsItem from "./OrderHistoryGoodsItem";
const queryClient = new QueryClient();
const user = userEvent.setup();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <OrderHistoryGoodsItem
        boriGoods={{
          bori_goods_count: 1,
          bori_goods_id: "64196d2665890a85382a7e76",
          bori_goods_image: "/bori_goods_images/bori_cup.jpg",
          bori_goods_name: "보리 컵",
          bori_goods_price: 7000,
        }}
      ></OrderHistoryGoodsItem>
    </QueryClientProvider>
  );
};

test("주문내역 상품 아이템 화면 반영 테스트", async () => {
  initRender();
  const goodsText = screen.getByText(/보리 컵/);
  expect(goodsText).toBeInTheDocument();
});
