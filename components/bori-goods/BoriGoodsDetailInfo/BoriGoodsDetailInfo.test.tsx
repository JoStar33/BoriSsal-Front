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
          product_name: '보리 티셔츠',
          product_price: 30000,
          product_stock: 20,
          product_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
          product_like: 10,
          product_image: '/none',
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
  const productName = await screen.findByText(/보리 티셔츠/);
  const tagName = await screen.findByText(/의류/);
  expect(productName).toBeInTheDocument();
  expect(tagName).toBeInTheDocument();
});

test('좋아요 버튼을 누를시 (로그인 없이)', async () => {
  initRender();
  const loginButton = screen.getByRole("login");
  await user.click(loginButton).then(() => {
    const error = screen.getByText("이메일 비밀번호를 입력해주세요.");
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
    user_product_like: [],
    user_bori_gallery_like: []
  }))
})
