import { putBoriGallery } from "@/apis/bori-gallery/boriGallery";
import { IPostBoriGallery } from '@/types/boriGallery';
import { useMutation, useQueryClient } from "react-query";

export const useUpdateBoriGalleryMutation = (bori_gallery_id: string, bori_gallery: IPostBoriGallery) => {
  const queryClient = useQueryClient();
  return useMutation(() => putBoriGallery(bori_gallery_id, bori_gallery), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-gallery");
    }
  });
};
