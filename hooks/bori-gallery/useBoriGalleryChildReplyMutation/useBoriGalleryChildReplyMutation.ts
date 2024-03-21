import { postBoriGalleryChildReply } from '@/apis/bori-gallery/boriGallery';
import { useMutation, useQueryClient } from 'react-query';

export const useBoriGalleryChildReplyMutation = (email: string, reply_id: string) => {
  const queryClient = useQueryClient();
  return useMutation((content: string) => postBoriGalleryChildReply(email, content, reply_id), {
    onSuccess: () => {
      queryClient.invalidateQueries('bori-gallery-reply');
    },
  });
};
