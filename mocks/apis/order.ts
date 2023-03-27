import { rest } from "msw";

export const orderMock = () => {
  return [
    rest.post(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/order`,
      (req, res, ctx) => {
        return res(ctx.status(200));
      }
    ),
    rest.delete(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/order/23`,
      (req, res, ctx) => {
        return res(ctx.status(200));
      }
    ),
    rest.get(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/order`,
      (req, res, ctx) => {
        return res(
          ctx.json([
            {
              order_date: "2023-03-27T04:30:07.949Z",
              order_detail: [
                {
                  bori_goods_count: 1,
                  bori_goods_id: "64196d2665890a85382a7e76",
                  bori_goods_image: "/bori_goods_images/bori_cup.jpg",
                  bori_goods_name: "보리 컵",
                  bori_goods_price: 7000,
                },
              ],
              order_status: "배송진행",
              price: 7000,
              _id: "23",
            },
          ])
        );
      }
    ),
  ];
};
