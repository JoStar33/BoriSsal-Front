import { IBoriGoods } from '@/types/boriGoods';
import { render, screen } from '@testing-library/react';
import BoriGoodsPage, { getStaticProps } from './index.page';

const initRender = () => {
  render(
    <BoriGoodsPage
      goodsData={[
        {
          _id: '23',
          category_id: '88',
          bori_goods_name: '보리 티셔츠',
          bori_goods_price: 30000,
          bori_goods_stock: 20,
          bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
          bori_goods_like: 10,
          bori_goods_image: '/none',
          created_at: new Date(),
        },
        {
          _id: '24',
          category_id: '89',
          bori_goods_name: '보리 펜',
          bori_goods_price: 1200,
          bori_goods_stock: 20,
          bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 펜',
          bori_goods_like: 10,
          bori_goods_image: '/none',
          created_at: new Date(),
        },
      ]}
      categoryData={[
        {
          _id: '87',
          category_name: '학용품',
        },
        {
          _id: '88',
          category_name: '의류',
        },
        {
          _id: '89',
          category_name: '생활용품',
        },
      ]}
      goodsErrorMessage={''}
      categoryErrorMessage={''}
    />,
  );
};

test('보리 굿즈 페이지 카테고리 반영 테스트', () => {
  initRender();
  const goods_name = screen.getByText('보리 티셔츠');
  expect(goods_name).toBeInTheDocument();
  const goods_price = screen.getByText('30000원');
  expect(goods_price).toBeInTheDocument();
});

test('보리 굿즈 페이지 카테고리 반영 테스트', () => {
  initRender();
  const category = screen.getByText('#생활용품');
  expect(category).toBeInTheDocument();
});

test('getStaticProps 동작 테스트', () => {
  let testData: IBoriGoods[];
  getStaticProps().then((res) => {
    testData = res.props.goodsData as any;
    expect(testData[0]._id).toBe('23');
  });
});
