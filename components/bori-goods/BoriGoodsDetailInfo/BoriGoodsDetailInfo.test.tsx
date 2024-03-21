import StatusContainer from '@/components/common/StatusContainer/StatusContainer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
import BoriGoodsDetailInfo from './BoriGoodsDetailInfo';

const user = userEvent.setup();

const queryClient = new QueryClient();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer />
      <BoriGoodsDetailInfo
        user={{
          email: '',
          nick: '',
          sns_id: '',
          profile_image: '',
          created_at: new Date(),
          user_bori_goods_like: [],
          user_bori_gallery_like: [],
        }}
        goods={{
          _id: '23',
          category_id: '88',
          bori_goods_name: '보리 티셔츠',
          bori_goods_price: 30000,
          bori_goods_stock: 20,
          bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
          bori_goods_like: 10,
          bori_goods_image: '/none',
          created_at: new Date(),
        }}
        category={{
          _id: '88',
          category_name: '의류',
        }}
      />
    </QueryClientProvider>,
  );
};

test('BoriGoodsDetailInfo 화면 렌더링 반영 테스트', async () => {
  initRender();
  const boriGoodsName = await screen.findByText(/보리 티셔츠/);
  const tagName = await screen.findByText(/의류/);
  expect(boriGoodsName).toBeInTheDocument();
  expect(tagName).toBeInTheDocument();
});
