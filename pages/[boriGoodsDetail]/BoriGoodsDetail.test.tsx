import { render, screen } from "@testing-library/react";
import { GetStaticPathsContext } from "next";
import { QueryClientProvider, QueryClient } from "react-query";
import { store } from "@/store";
import { Provider } from "react-redux";
import BoriGoodsDetail, { getStaticProps, getStaticPaths } from "./index.page";

const queryClient = new QueryClient();
const initRender = () => {
  render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BoriGoodsDetail goods={{
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
      }} 
      categoryErrorMessage={""} 
      goodsErrorMessage={""}></BoriGoodsDetail>
    </Provider>
  </QueryClientProvider>)
};

test('BoriGoodsDetail 화면 렌더링 반영 테스트', async () => {
  initRender();
  const productName = await screen.findByText(/보리 티셔츠/);
  const tagName = await screen.findByText(/의류/);
  expect(productName).toBeInTheDocument();
  expect(tagName).toBeInTheDocument();
})

test("BoriGoodsDetail의 getStaticPaths 동작 테스트", async () => {
  const locales: GetStaticPathsContext = {
    locales: undefined,
    defaultLocale: undefined
  }
  const value = await getStaticPaths(locales);
  expect((value.paths[0] as any).params.boriGoodsDetail).toEqual("보리 티셔츠");
});


test("BoriGoodsDetail의 getStaticProps 동작 테스트", async () => {
  const value = await getStaticProps({params: { boriGoodsDetail: '보리 티셔츠'}});
  expect(value).toEqual({props: {
    goods: {
      _id: "23",
      category_id: '88',
      product_name: '보리 티셔츠',
      product_price: 30000,
      product_stock: 20,
      product_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
      product_like: 10,
      product_image: '/none',
    },
    category: {
      _id: "88",
      category_name:"의류"
    },
    categoryErrorMessage: null,
    goodsErrorMessage: null,
  }})
});