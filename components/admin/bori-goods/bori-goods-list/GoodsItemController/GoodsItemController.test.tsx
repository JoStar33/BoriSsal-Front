import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import GoodsItemController from "./GoodsItemController";

const user = userEvent.setup();

const queryClient = new QueryClient();

const setState = jest.fn() as any;

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <GoodsItemController 
        goodsInfo={{
          bori_goods_name: "",
          bori_goods_price: 0,
          bori_goods_stock: 0,
          bori_goods_desc: ""
        }}
        boriGoods={setState} 
        categoryInfo={"asds"}/>
    </QueryClientProvider>
  );
}

test('GoodsItemController 값을 비운상태로 수정할시에', () => {
  initRender();
  const updateButton = screen.getByRole("update-goods");
  user.click(updateButton).then(async () => {
    const dialogText = await screen.findByText(/값을 비운 상태로 수정이 불가능합니다./);
  });
})