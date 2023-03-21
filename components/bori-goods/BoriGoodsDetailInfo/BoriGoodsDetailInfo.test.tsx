import { render, screen } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { store } from "@/store";
import { Provider } from "react-redux";
import BoriGoodsDetailInfo from "./BoriGoodsDetailInfo";
import { resetUserState, setUserState } from "@/store/user";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const queryClient = new QueryClient();

const initRender = () => {
  store.dispatch(resetUserState());
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BoriGoodsDetailInfo goods={{
          _id: "23",
          category_id: '88',
          bori_goods_name: '보리 티셔츠',
          bori_goods_price: 30000,
          bori_goods_stock: 20,
          bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
          bori_goods_like: 10,
          bori_goods_image: '/none',
          created_at: new Date,
        }} category={{
          _id: "88",
          category_name:"의류"
        }}></BoriGoodsDetailInfo>
      </Provider>
    </QueryClientProvider>)
};

test('BoriGoodsDetailInfo 화면 렌더링 반영 테스트', async () => {
  initRender();
  const boriGoodsName = await screen.findByText(/보리 티셔츠/);
  const tagName = await screen.findByText(/의류/);
  expect(boriGoodsName).toBeInTheDocument();
  expect(tagName).toBeInTheDocument();
});

test('좋아요 버튼을 누를시 (로그인 없이)', async () => {
  initRender();
  const loginButton = screen.getByRole("like");
  await user.click(loginButton).then(() => {
    const error = screen.getByText("로그인 이후에 누를 수 있어요!");
    expect(error).toBeInTheDocument();
  });
})

test('좋아요 버튼을 누를시 (로그인 이후)', () => {
  store.dispatch(setUserState({
    id: "",
    email: "",
    nick: "",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  }))
})
