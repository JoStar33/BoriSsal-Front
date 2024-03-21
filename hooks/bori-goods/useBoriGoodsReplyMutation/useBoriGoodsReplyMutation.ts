import { postBoriGoodsReply } from '@/apis/bori-goods/boriGoods';
import { useMutation, useQueryClient } from 'react-query';

export const useBoriGoodsReplyMutation = (email: string, bori_goods_id: string) => {
  const queryClient = useQueryClient();
  return useMutation((content: string) => postBoriGoodsReply(email, bori_goods_id, content), {
    onSuccess: () => {
      queryClient.invalidateQueries('bori-goods-reply');
    },
  });
};
