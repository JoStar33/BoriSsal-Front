import { postBoriGalleryReply } from '@/apis/bori-gallery/boriGallery';
import { postBoriGoodsReply } from '@/apis/bori-goods/boriGoods';
import { useMutation, useQueryClient } from 'react-query';

export const useBoriGalleryReplyMutation = (email: string, bori_gallrey_id: string) => {
  const queryClient = useQueryClient();
  return useMutation((content: string) => postBoriGalleryReply(email, bori_gallrey_id, content), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-gallery-reply");
    }
  });
};