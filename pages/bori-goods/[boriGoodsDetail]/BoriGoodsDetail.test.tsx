
import { render, screen } from "@testing-library/react";
import { GetStaticPathsContext } from "next";
import { QueryClient, QueryClientProvider } from "react-query";
import BoriGoodsDetail, { getStaticPaths, getStaticProps } from "./index.page";

const queryClient = new QueryClient();
const initRender = () => {
  render(
  <QueryClientProvider client={queryClient}>
    <BoriGoodsDetail goods={{
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
    }} 
    categoryErrorMessage={""} 
    goodsErrorMessage={""}></BoriGoodsDetail>
  </QueryClientProvider>)
};

test('BoriGoodsDetail 화면 렌더링 반영 테스트', async () => {
  initRender();
  const boriGoodsName = await screen.findByText(/보리 티셔츠/);
  const tagName = await screen.findByText(/의류/);
  expect(boriGoodsName).toBeInTheDocument();
  expect(tagName).toBeInTheDocument();
})

test("BoriGoodsDetail의 getStaticPaths 동작 테스트", async () => {
  const locales: GetStaticPathsContext = {
    locales: undefined,
    defaultLocale: undefined
  }
  const value = await getStaticPaths(locales);
  expect((value.paths[0] as any).params.boriGoodsDetail).toEqual("23");
});


test("BoriGoodsDetail의 getStaticProps 동작 테스트", async () => {
  const value = await getStaticProps({params: { boriGoodsDetail: '23'}});
  expect(value).toEqual({props: {
    goods: {
      _id: "23",
      category_id: '88',
      bori_goods_name: '보리 티셔츠',
      bori_goods_price: 30000,
      bori_goods_stock: 20,
      bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
      bori_goods_like: 10,
      bori_goods_image: '/none',
    },
    category: {
      _id: "88",
      category_name:"의류"
    },
    categoryErrorMessage: null,
    goodsErrorMessage: null,
  }})
});