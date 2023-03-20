import { customAxios } from "../axios/customAxios";

const getGoods = () => {
  return customAxios.get('/product');
};

const getCategory = () => {
  return customAxios.get('/product-category');
};

const getBoriGoodsReply = (goods_id: string) => {
  return customAxios.get(`/product-reply/${goods_id}`)
}

const postBoriGoodsReply = (user_id: string, email: string, product_id: string, content: string) => {
  return customAxios.post(`/product-reply`, {
    user_id: user_id,
    email: email,
    product_id: product_id,
    content: content,
  })
}

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

export { getGoods, getCategory, getBoriGoodsReply, postBoriGoodsReply, likeGoods, dislikeGoods };