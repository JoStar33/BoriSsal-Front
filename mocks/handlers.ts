import { rest } from 'msw';

//보면 이거 배열임. 하나의 핸들러만 작성한건데 원하는 HTTP 메소드, 원하는 상태, 원하는 데이터 등을
//아래와 같이 확인할 수 있다.
export const handlers = [
  // Match a GET request to a third-party server.
  rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: 3333,
        email: "user12@test.com",
        nick: "클라나이"
      })
    );
  }),
  rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/join`, (req, res, ctx) => {
    return res(
      ctx.status(200)
    );
  }),
  rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/user/23`, (req, res, ctx) => {
    return res
    (
      ctx.status(200),
      ctx.json({
        _id: "23",
        email: 'rhwdf@gmail.com',
        nick: '우하하'
      })
    );
  }),
  rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/deliver-address/23`, (req, res, ctx) => {
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
  rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/password`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: '성공적으로 변경되었습니다!'
      })
    );
  }),
  rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/is-login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
    );
  }),
  rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/is-not-login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
    );
  }),
  rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/logout`, (req, res, ctx) => {
    return res(
      ctx.status(200),
    );
  }),
  rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/join/nick`, (req, res, ctx) => {
    return res(
      ctx.status(200),
    );
  }),
  rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/join/email`, (req, res, ctx) => {
    return res(
      ctx.status(200),
    );
  }),
  rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/password`, (req, res, ctx) => {
    return res(
      ctx.status(200),
    );
  }),
  rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/find/password`, (req, res, ctx) => {
    return res(
      ctx.status(200),
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
  }),
  rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/user/23`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: "23",
        email: 'rhwdf@gmail.com',
        nick: '우하하'
      })
    );
  }),
  rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-goods`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{
        _id: "23",
        category_id: '88',
        bori_goods_name: '보리 티셔츠',
        bori_goods_price: 30000,
        bori_goods_stock: 20,
        bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 이미지',
        bori_goods_like: 10,
        bori_goods_image: '/none',
      }, {
        _id: "24",
        category_id: '89',
        bori_goods_name: '보리 펜',
        bori_goods_price: 1200,
        bori_goods_stock: 20,
        bori_goods_desc: '보리의 얼굴이 들어간 아주 깜찍한 펜',
        bori_goods_like: 10,
        bori_goods_image: '/none',
      }])
    );
  }),
  rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-goods-category`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{
        _id: "87",
        category_name:"학용품"
      }, {
        _id: "88",
        category_name:"의류"
      }, {
        _id: "89",
        category_name: "생활용품"
      }])
    );
  }),
  rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-gallery-reply/23`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{
        _id: '231',
        user_id: '73246',
        email: 'junho@naver.com',
        bori_gallery_id: '23',
        content: '테스트 댓글',
        reply_child: []
      }])
    );
  }),
  rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-goods-reply/23/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        bori_goods_reply: [{
          _id: '231',
          user_id: '73246',
          email: 'junho@naver.com',
          bori_gallery_id: '23',
          content: '테스트 댓글',
          reply_child: []
        }]
      })
    );
  }),
  rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-goods-reply`, (req, res, ctx) => {
    return res(
      ctx.status(200)
    );
  }),
  rest.patch(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-goods/like`, (req, res, ctx) => {
    return res(
      ctx.status(200)
    );
  }),
  rest.patch(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-goods/dislike`, (req, res, ctx) => {
    return res(
      ctx.status(200)
    );
  }),
  rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-goods-reply/child`, (req, res, ctx) => {
    return res(
      ctx.status(200)
    );
  }),
  rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/cart`, (req, res, ctx) => {
    return res(
      ctx.status(200)
    );
  }),
  rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/order`, (req, res, ctx) => {
    return res(
      ctx.status(200)
    );
  }),
  rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/cart/23`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{
        _id: '214214',
        user_id: 'et6546',
        bori_goods_id: '3415dfgsd',
        bori_goods_name: '보리 펜',
        bori_goods_image: '/none',
        bori_goods_price: '30000'
      }])
    );
  }),
  rest.delete(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/cart/23/23`, (req, res, ctx) => {
    return res(
      ctx.status(200)
    );
  }),
]