import { postBoriGoodsReply } from '@/apis/bori-goods/boriGoods';
import { useUserStore } from '@/store/user';
import { useMutation, useQueryClient } from 'react-query';

export const useBoriGoodsReplyMutation = (bori_goods_id: string) => {
  const { user } = useUserStore();
  const queryClient = useQueryClient();
  return useMutation((content: string) => postBoriGoodsReply(user.id, user.email, bori_goods_id, content), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-goods-reply");
    }
  });
};