import { rest } from 'msw';

export const userMock = () => {
  return [
    rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/user`, (req, res, ctx) => {
      return res
      (
        ctx.status(200),
        ctx.json({
          email: 'rhwdf@gmail.com',
          nick: '우하하',
          user_bori_goods_like: [],
          user_bori_gallery_like: []
        })
      );
    }),
    rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/deliver-address`, (req, res, ctx) => {
      return res
      (
        ctx.status(200),
        ctx.json({
          user_id: "23",
          phone_number: "01033332222",
          address: '경기도 안양시 동안구 호랑이아파트',
          address_detail: '102동 304호'
        })
      );
    }),
    rest.patch(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/deliver-address`, (req, res, ctx) => {
      return res(
        ctx.status(200)
      );
    }),
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/user/profile-image/23`, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          user_id: "23",
          phone_number: "01033332222",
          address: '경기도 안양시 동안구 호랑이아파트',
          address_detail: '102동 304호'
        })
      );
    })
  ];
}