
import { patchBoriGalleryImage } from "@/apis/bori-gallery/boriGallery";
import { useMutation, useQueryClient } from "react-query";

export const useBoriGalleryImageMutation = (bori_gallery_id: string) => {
  const queryClient = useQueryClient();
  return useMutation((bori_gallery_image: FormData) => patchBoriGalleryImage(
    bori_gallery_id,
    bori_gallery_image
  ), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-gallery");
    }
  });
};
