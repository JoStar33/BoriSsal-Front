import { dislikeGoods, likeGoods } from '@/apis/bori-goods/boriGoods';
import { useMutation } from 'react-query';


export const useLikeGoodsMutation = (user_id: string, goods_id: string, isLike: string | undefined) => {
  return useMutation(() => isLike ? dislikeGoods(user_id, goods_id) : likeGoods(user_id, goods_id))
}