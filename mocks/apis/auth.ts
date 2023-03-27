import { rest } from 'msw';

export const authMock = () => {
  return [
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
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/password`, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          message: '성공적으로 변경되었습니다!'
        })
      );
    })
  ];
}