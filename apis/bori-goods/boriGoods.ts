import { IBoriGoods, ICategory, IPostBoriGoods } from '@/types/boriGoods';
import { IReplyMutation } from '@/types/reply';
import { requests } from '../axios/customAxios';

const getBoriGoods = async () => {
  return await requests.get<IBoriGoods[]>('/bori-goods');
};

const getCategory = async () => {
  return await requests.get<ICategory[]>('/bori-goods-category');
};

const patchBoriGoodsImage = async (goods_id: string, bori_goods_image: FormData) => {
  return await requests.patch(`/bori-goods/image/${goods_id}`, bori_goods_image, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const putBorigoods = async (bori_goods: IPostBoriGoods, category_id: string, bori_goods_id: string) => {
  return await requests.put(`/bori-goods/${bori_goods_id}`, {
    bori_goods: bori_goods,
    category_id: category_id,
  });
};

const deleteBorigoods = async (bori_goods_id: string) => {
  return await requests.delete(`/bori-goods/${bori_goods_id}`);
};

const postBoriGoods = async (category_id: string, bori_goods: IPostBoriGoods, bori_goods_image: FormData) => {
  bori_goods_image.append(
    'bori_goods',
    JSON.stringify({
      category_id: category_id,
      bori_goods: bori_goods,
    }),
  );
  return await requests.post('/bori-goods', bori_goods_image, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const getBoriGoodsReply = async (goods_id: string, limit: number) => {
  const boriGoodsReply = await requests.get<IReplyMutation>(`/bori-goods-reply/${goods_id}/${limit}`);
  return boriGoodsReply;
};

const postBoriGoodsReply = async (email: string, bori_goods_id: string, content: string) => {
  return await requests.post(`/bori-goods-reply`, {
    email: email,
    bori_goods_id: bori_goods_id,
    content: content,
  });
};

const postBoriGoodsChildReply = async (email: string, content: string, reply_id: string) => {
  return await requests.post(`/bori-goods-reply/child`, {
    reply_id: reply_id,
    email: email,
    content: content,
  });
};

const likeGoods = async (goods_id: string) => {
  return await requests.patch(`/bori-goods/like`, {
    bori_goods_id: goods_id,
  });
};

const dislikeGoods = async (goods_id: string) => {
  return await requests.patch(`/bori-goods/dislike`, {
    bori_goods_id: goods_id,
  });
};

export {
  getBoriGoods,
  deleteBorigoods,
  putBorigoods,
  getCategory,
  getBoriGoodsReply,
  postBoriGoods,
  postBoriGoodsReply,
  patchBoriGoodsImage,
  likeGoods,
  dislikeGoods,
  postBoriGoodsChildReply,
};
