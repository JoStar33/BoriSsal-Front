import { rest } from 'msw';

export const orderMock = () => {
  return [
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/order`, (req, res, ctx) => {
      return res(
        ctx.status(200)
      );
    })
  ];
}