import { postBoriGoodsChildReply } from '@/apis/bori-goods/boriGoods';
import { useMutation, useQueryClient } from 'react-query';


export const useBoriGoodsChildReplyMutation = (email: string, reply_id: string) => {
  const queryClient = useQueryClient();
  return useMutation((content: string) => postBoriGoodsChildReply(email, content, reply_id), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-goods-reply");
    }
  });
};