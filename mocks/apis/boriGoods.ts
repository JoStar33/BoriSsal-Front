import { rest } from 'msw';


export const boriGoodsMock = () => {
  return [
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
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-goods`, (req, res, ctx) => {
      return res(
        ctx.status(200)
      );
    })
  ];
}