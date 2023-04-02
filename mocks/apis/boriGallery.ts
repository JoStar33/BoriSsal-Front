import { rest } from 'msw';


export const boriGalleryMock = () => {
  return [
    rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-gallery-reply/23/1`, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          overflow: false,
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
    rest.delete(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-gallery/23`, (req, res, ctx) => {
      return res(
        ctx.status(200)
      )
    }),
    rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-gallery`, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([{
          _id: '23',
          bori_gallery_title: '제하하하',
          bori_gallery_desc: '크로우즈',
          bori_gallery_like: 3,
          bori_gallery_image: '/none',
          created_at: new Date()
        }])
      )
    }),
    rest.patch(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-gallery/image/23`, (req, res, ctx) => {
      return res(
        ctx.status(200)
      )
    }),
    rest.put(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-gallery/23`, (req, res, ctx) => {
      return res(
        ctx.status(200)
      )
    }),
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-gallery`, (req, res, ctx) => {
      return res(
        ctx.status(200)
      )
    })
  ];
}