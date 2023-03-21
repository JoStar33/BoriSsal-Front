import { postBoriGoodsChildReply } from '@/apis/bori-goods/boriGoods';
import { useMutation, useQueryClient } from 'react-query';

export const useBoriGoodsChildReplyMutation = (user_id: string, email: string, reply_id: string) => {
  const queryClient = useQueryClient();
  return useMutation((content: string) => postBoriGoodsChildReply(user_id, email, content, reply_id), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-goods-reply");
    }
  });
};