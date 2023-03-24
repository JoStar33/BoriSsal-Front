import { postBoriGoodsChildReply } from '@/apis/bori-goods/boriGoods';
import { useUserStore } from '@/store/user';
import { useMutation, useQueryClient } from 'react-query';


export const useBoriGoodsChildReplyMutation = (reply_id: string) => {
  const queryClient = useQueryClient();
  const { user } = useUserStore();
  return useMutation((content: string) => postBoriGoodsChildReply(user.id, user.email, content, reply_id), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-goods-reply");
    }
  });
};