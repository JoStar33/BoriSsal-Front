import { rest } from 'msw';


export const boriGalleryMock = () => {
  return [
    rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-gallery-reply/23`, (req, res, ctx) => {
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
  ];
}