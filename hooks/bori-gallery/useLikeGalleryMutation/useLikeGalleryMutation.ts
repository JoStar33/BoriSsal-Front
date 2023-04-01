import { dislikeGallery, likeGallery } from "@/apis/bori-gallery/boriGallery";
import { useMutation, useQueryClient } from "react-query";

export const useLikeGalleryMutation = (user_bori_gallery_like: string[], gallery_id: string) => {
  const queryClient = useQueryClient();
  return useMutation(() =>
    user_bori_gallery_like.find((likeGallery) => likeGallery === gallery_id)
      ? dislikeGallery(gallery_id)
      : likeGallery(gallery_id), {
        onSuccess: () => {
          queryClient.invalidateQueries("user");
        }
      }
  );
};
