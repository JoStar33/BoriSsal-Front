import { customAxios } from "../axios/customAxios";

const getGoods = () => {
  return customAxios.get('/product');
};

const getCategory = () => {
  return customAxios.get('/product-category');
};

const getBoriGoodsReply = (goods_id: string, limit: number) => {
  return customAxios.get(`/product-reply/${goods_id}/${limit}`)
};

const postBoriGoodsReply = (user_id: string, email: string, product_id: string, content: string) => {
  return customAxios.post(`/product-reply`, {
    user_id: user_id,
    email: email,
    product_id: product_id,
    content: content,
  })
};

const postBoriGoodsChildReply = (user_id: string, email: string, content: string, reply_id: string) => {
  return customAxios.post(`/product-reply/child`, {
    reply_id: reply_id,
    user_id: user_id,
    email: email,
    content: content,
  })
};

const likeGoods = (user_id: string, goods_id: string) => {
  return customAxios.patch(`/product/like`, {
    user_id: user_id,
    product_id: goods_id
  });
};

const dislikeGoods = (user_id: string, goods_id: string) => {
  return customAxios.patch(`/product/dislike`, {
    user_id: user_id,
    product_id: goods_id
  });
};

export { getGoods, getCategory, getBoriGoodsReply, postBoriGoodsReply, likeGoods, dislikeGoods, postBoriGoodsChildReply };