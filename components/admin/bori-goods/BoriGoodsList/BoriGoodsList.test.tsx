import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import BoriGoodsList from "./BoriGoodsList";

const queryClient = new QueryClient();

const user = userEvent.setup();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <BoriGoodsList/>
    </QueryClientProvider>
  );
};

test('GoodsListItem 화면 반영 테스트', async () => {
  initRender();
  const goodsName = await screen.findByDisplayValue(/보리 티셔츠/);
  const goodsPrice = await screen.findByDisplayValue(/30000/);
  const goodsDesc = await screen.findByDisplayValue(/보리의 얼굴이 들어간 아주 깜찍한 이미지/);
  expect(goodsName).toBeInTheDocument();
  expect(goodsPrice).toBeInTheDocument();
  expect(goodsDesc).toBeInTheDocument();
});


test('GoodsListItem 검색 테스트', async () => {
  initRender();
  const searchInput = screen.getByRole("search");
  const goodsName = await screen.findByDisplayValue(/보리 펜/);
  fireEvent.change(searchInput, {target: { value: "보리 티셔츠" }});
  expect(goodsName).not.toBeInTheDocument();
});
