import { postBoriGoodsChildReply } from '@/apis/bori-goods/boriGoods';
import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { RootState } from "@/store";


export const useBoriGoodsChildReplyMutation = (reply_id: string) => {
  const queryClient = useQueryClient();
  const { user } = useSelector((state: RootState) => state.userStore);
  return useMutation((content: string) => postBoriGoodsChildReply(user.id, user.email, content, reply_id), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-goods-reply");
    }
  });
};