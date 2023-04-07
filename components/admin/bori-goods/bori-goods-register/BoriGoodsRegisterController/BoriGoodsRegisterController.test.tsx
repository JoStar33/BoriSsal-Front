import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { IPostBoriGoods } from "@/types/boriGoods";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import BoriGoodsRegisterController from "./BoriGoodsRegisterController";

const queryClient = new QueryClient();

const user = userEvent.setup();

const setState = jest.fn() as any;

const initRender = (goodsInfo: IPostBoriGoods) => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <BoriGoodsRegisterController 
        image={"/no_image"} 
        setGoodsInfo={setState} 
        goodsInfo={goodsInfo} 
        setImage={setState} 
        formData={setState} 
        categoryInfo={"hfdy123rfd80"}/>
    </QueryClientProvider>
  );
};

test('BoriGoodsRegisterController 굿즈 이름이 없을 경우', async () => {
  initRender({
    bori_goods_name: "",
    bori_goods_price: 0,
    bori_goods_stock: 0,
    bori_goods_desc: ""
  });
  const registButton = screen.getByRole("regist-button");
  await user.click(registButton);
  const dialogText = await screen.findByText(/이런 굿즈 이름을 안 설정하셨는데... 다시 확인해주세요!/);
  expect(dialogText).toBeInTheDocument();
});

test('BoriGoodsRegisterController 굿즈 가격을 설정하지않았을 경우', async () => {
  initRender({
    bori_goods_name: "보리펜",
    bori_goods_price: 0,
    bori_goods_stock: 0,
    bori_goods_desc: ""
  });
  const registButton = screen.getByRole("regist-button");
  await user.click(registButton);
  const dialogText = await screen.findByText(/가격은 500원보다 커야해요!/);
  expect(dialogText).toBeInTheDocument();
});

test('BoriGoodsRegisterController 굿즈 수량을 1개로 했을 경우', async () => {
  initRender({
    bori_goods_name: "보리펜",
    bori_goods_price: 30000,
    bori_goods_stock: 1,
    bori_goods_desc: ""
  });
  const registButton = screen.getByRole("regist-button");
  await user.click(registButton);
  const dialogText = await screen.findByText(/재고는 최소 3개는 있어야해요!/);
  expect(dialogText).toBeInTheDocument();
});