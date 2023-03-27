import { rest } from 'msw';

export const cartMock = () => {
  return [
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/cart`, (req, res, ctx) => {
      return res(
        ctx.status(200)
      );
    }),
    rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/cart`, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([{
          _id: '214214',
          bori_goods_id: '3415dfgsd',
          bori_goods_name: '보리 펜',
          bori_goods_image: '/none',
          bori_goods_count: 3,
          bori_goods_price: 30000
        }])
      );
    }),
    rest.delete(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/cart/23`, (req, res, ctx) => {
      return res(
        ctx.status(200)
      );
    })
  ];
}