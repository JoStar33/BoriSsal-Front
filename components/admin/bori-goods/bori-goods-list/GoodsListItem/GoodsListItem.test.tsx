import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import GoodsListItem from "./GoodsListItem";

const queryClient = new QueryClient();

const user = userEvent.setup();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <GoodsListItem boriGoods={{
          _id: "23",
          category_id: '88',
          bori_goods_name: '보리 티셔츠',
          bori_goods_price: 30000,
          bori_goods_stock: 20,
          bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
          bori_goods_like: 10,
          bori_goods_image: '/none',
          created_at: new Date
        }} />
    </QueryClientProvider>
  );
};

test('GoodsListItem 화면 반영 테스트', () => {
  initRender();
  const goodsName = screen.getByDisplayValue(/보리 티셔츠/);
  const goodsPrice = screen.getByDisplayValue(/30000/);
  const goodsCount = screen.getByDisplayValue(/20/);
  const goodsDesc = screen.getByDisplayValue(/보리의 얼굴이 들어간 아주 깜찍한 이미지/);
  expect(goodsName).toBeInTheDocument();
  expect(goodsPrice).toBeInTheDocument();
  expect(goodsCount).toBeInTheDocument();
  expect(goodsDesc).toBeInTheDocument();
});

test('GoodsListItem 굿즈 이름이 없는 상태로 수정을 할시', () => {
  initRender();
  const goodsName = screen.getByDisplayValue(/보리 티셔츠/);
  fireEvent.change(goodsName, {target: { value: "" }});
  const updateGoodsButton = screen.getByRole("update-goods");
  user.click(updateGoodsButton).then(() => {
    const noti = screen.findByText(/값을 비운 상태로 수정이 불가능합니다./);
    expect(noti).toBeInTheDocument();
  });
});

