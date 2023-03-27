import { ICategory, IPostBoriGoods } from "@/types/boriGoods";
import { IReplyMutation } from "@/types/reply";
import { customAxios } from "../axios/customAxios";

const getGoods = () => {
  return customAxios.get('/bori-goods');
};

const getCategory = () => {
  const category = customAxios.get('/bori-goods-category')    
    .then(res => res)
    .then(res => res.data)
    .then((data: ICategory[]) => data);
  return category;
};

const postBoriGoods = (category_id: string, bori_goods: IPostBoriGoods, bori_goods_image: FormData) => {
  bori_goods_image.append('bori_goods', JSON.stringify({
    category_id: category_id,
    bori_goods: bori_goods
  }));
  return customAxios.post('/bori-goods', bori_goods_image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

const getBoriGoodsReply = (goods_id: string, limit: number) => {
  const boriGoodsReply = customAxios.get(`/bori-goods-reply/${goods_id}/${limit}`)    
    .then(res => res)
    .then(res => res.data)
    .then((data: IReplyMutation) => data)
  return boriGoodsReply;
};

const postBoriGoodsReply = (email: string, bori_goods_id: string, content: string) => {
  return customAxios.post(`/bori-goods-reply`, {
    email: email,
    bori_goods_id: bori_goods_id,
    content: content,
  })
};

const postBoriGoodsChildReply = (email: string, content: string, reply_id: string) => {
  return customAxios.post(`/bori-goods-reply/child`, {
    reply_id: reply_id,
    email: email,
    content: content,
  })
};

const likeGoods = (goods_id: string) => {
  return customAxios.patch(`/bori-goods/like`, {
    bori_goods_id: goods_id
  });
};

const dislikeGoods = (goods_id: string) => {
  return customAxios.patch(`/bori-goods/dislike`, {
    bori_goods_id: goods_id
  });
};

export { getGoods, getCategory, getBoriGoodsReply, postBoriGoods, postBoriGoodsReply, likeGoods, dislikeGoods, postBoriGoodsChildReply };