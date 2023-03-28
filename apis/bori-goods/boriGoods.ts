import { IBoriGoods, ICategory, IPostBoriGoods } from "@/types/boriGoods";
import { IReplyMutation } from "@/types/reply";
import { customAxios } from "../axios/customAxios";

const getBoriGoods = () => {
  const boriGoods = customAxios.get('/bori-goods')
    .then(res => res)
    .then(res => res.data)
    .then((data: IBoriGoods[]) => data);
  return boriGoods;
};

const getCategory = () => {
  const category = customAxios.get('/bori-goods-category')    
    .then(res => res)
    .then(res => res.data)
    .then((data: ICategory[]) => data);
  return category;
};


const patchBoriGoodsImage = (goods_id: string, bori_goods_image: FormData) => {
  return customAxios.patch(`/bori-goods/image/${goods_id}`, bori_goods_image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}

const putBorigoods = (bori_goods: IPostBoriGoods, category_id: string, bori_goods_id: string) => {
  return customAxios.put(`/bori-goods/${bori_goods_id}`, {
    bori_goods: bori_goods,
    category_id: category_id
  })
}

const deleteBorigoods = (bori_goods_id: string) => {
  return customAxios.delete(`/bori-goods/${bori_goods_id}`);
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

export { getBoriGoods, deleteBorigoods, putBorigoods, getCategory, getBoriGoodsReply, postBoriGoods, postBoriGoodsReply, patchBoriGoodsImage, likeGoods, dislikeGoods, postBoriGoodsChildReply };

