import { deleteBoriGallery } from "@/apis/bori-gallery/boriGallery";
import { useMutation, useQueryClient } from "react-query";

export const useDeleteBoriGalleryMutation = (
  bori_gallery_id: string
) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => deleteBoriGallery(bori_gallery_id), {
      onSuccess: () => {
        queryClient.invalidateQueries("bori-gallery");
      }
    }
  );
};
