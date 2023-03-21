import { postBoriGoodsReply } from '@/apis/bori-goods/boriGoods';
import { useMutation, useQueryClient } from 'react-query';

export const useBoriGoodsReplyMutation = (user_id: string, email: string, product_id: string) => {
  const queryClient = useQueryClient();
  return useMutation((content: string) => postBoriGoodsReply(user_id, email, product_id, content), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-goods-reply");
    }
  });
};