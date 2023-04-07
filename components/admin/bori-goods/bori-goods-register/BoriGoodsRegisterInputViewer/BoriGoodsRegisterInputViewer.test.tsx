import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import BoriGoodsRegisterInputViewer from "./BoriGoodsRegisterInputViewer";

const user = userEvent.setup();

const queryClient = new QueryClient();

const setState = jest.fn() as any;

test("BoriGoodsRegisterInputViewer 화면반영 테스트", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <BoriGoodsRegisterInputViewer 
        categoryData={[]} 
        setCategoryInfo={setState} 
        setGoodsInfo={setState} 
        goodsInfo={{
          bori_goods_name: "",
          bori_goods_price: 0,
          bori_goods_stock: 0,
          bori_goods_desc: ""
        }} />
    </QueryClientProvider>
  );
  const goodsName = screen.getByText(/굿즈명:/);
  const goodsPrice = screen.getByText(/굿즈가격:/);
  const goodsStock = screen.getByText(/재고량:/);
  const goodsDesc = screen.getByText(/카테고리:/);
  expect(goodsName).toBeInTheDocument();
  expect(goodsPrice).toBeInTheDocument();
  expect(goodsStock).toBeInTheDocument();
  expect(goodsDesc).toBeInTheDocument();
});
