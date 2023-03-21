import { customAxios } from "../axios/customAxios";

const getGoods = () => {
  return customAxios.get('/bori-goods');
};

const getCategory = () => {
  return customAxios.get('/bori-goods-category');
};

const getBoriGoodsReply = (goods_id: string, limit: number) => {
  return customAxios.get(`/bori-goods-reply/${goods_id}/${limit}`)
};

const postBoriGoodsReply = (user_id: string, email: string, bori_goods_id: string, content: string) => {
  return customAxios.post(`/bori-goods-reply`, {
    user_id: user_id,
    email: email,
    bori_goods_id: bori_goods_id,
    content: content,
  })
};

const postBoriGoodsChildReply = (user_id: string, email: string, content: string, reply_id: string) => {
  return customAxios.post(`/bori-goods-reply/child`, {
    reply_id: reply_id,
    user_id: user_id,
    email: email,
    content: content,
  })
};

const likeGoods = (user_id: string, goods_id: string) => {
  return customAxios.patch(`/bori-goods/like`, {
    user_id: user_id,
    bori_goods_id: goods_id
  });
};

const dislikeGoods = (user_id: string, goods_id: string) => {
  return customAxios.patch(`/bori-goods/dislike`, {
    user_id: user_id,
    bori_goods_id: goods_id
  });
};

export { getGoods, getCategory, getBoriGoodsReply, postBoriGoodsReply, likeGoods, dislikeGoods, postBoriGoodsChildReply };