import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import BoriGoodsRegister from "./BoriGoodsRegister";

const queryClient = new QueryClient();

const user = userEvent.setup();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <BoriGoodsRegister/>
    </QueryClientProvider>
  );
};

test('BoriGoodsRegister 등록 성공 테스트', async () => {
  initRender();
  const goodsName = screen.getByRole("bori_goods_name");
  const goodsPrice = screen.getByRole("bori_goods_price");
  const goodsStock = screen.getByRole("bori_goods_stock");
  const goodsDesc = screen.getByRole("bori_goods_desc");
  const goodsCategory = await screen.findByRole("goods-category");
  const goodsRegistButton = screen.getByRole("regist-button");
  fireEvent.change(goodsName, {target: { value: "kokoo" }});
  fireEvent.change(goodsPrice, {target: { value: 30000 }});
  fireEvent.change(goodsStock, {target: { value: 5 }});
  fireEvent.change(goodsDesc, {target: { value: "koko" }});
  user.selectOptions(goodsCategory, '87');
  user.click(goodsRegistButton).then(() => {
    const successText = screen.findByText(/굿즈 등록 성공!/);
    expect(successText).toBeInTheDocument();
  })
});


test('BoriGoodsRegister 누락된 값으로 인한 등록 실패 테스트', async () => {
  initRender();
  const goodsName = screen.getByRole("bori_goods_name");
  const goodsPrice = screen.getByRole("bori_goods_price");
  const goodsStock = screen.getByRole("bori_goods_stock");
  const goodsDesc = screen.getByRole("bori_goods_desc");
  const goodsCategory = await screen.findByRole("goods-category");
  const goodsRegistButton = screen.getByRole("regist-button");
  fireEvent.change(goodsName, {target: { value: "" }});
  fireEvent.change(goodsPrice, {target: { value: 30000 }});
  fireEvent.change(goodsStock, {target: { value: 5 }});
  fireEvent.change(goodsDesc, {target: { value: "koko" }});
  user.selectOptions(goodsCategory, '87');
  user.click(goodsRegistButton).then(() => {
    const successText = screen.findByText(/이런 굿즈 이름을 안 설정하셨는데... 다시 확인해주세요!/);
    expect(successText).toBeInTheDocument();
  })
});