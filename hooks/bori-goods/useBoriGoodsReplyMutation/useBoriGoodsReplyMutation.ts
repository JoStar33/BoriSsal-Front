import { postBoriGoodsReply } from '@/apis/bori-goods/boriGoods';
import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { RootState } from "@/store";

export const useBoriGoodsReplyMutation = (bori_goods_id: string) => {
  const { user } = useSelector((state: RootState) => state.userStore);
  const queryClient = useQueryClient();
  return useMutation((content: string) => postBoriGoodsReply(user.id, user.email, bori_goods_id, content), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-goods-reply");
    }
  });
};