import { putBoriGallery } from "@/apis/bori-gallery/boriGallery";
import { IPostBoriGallery } from "@/types/boriGallery";
import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";

export const useUpdateBoriGalleryMutation = (
  bori_gallery_id: string,
  bori_gallery: IPostBoriGallery,
  setDialog: Dispatch<SetStateAction<boolean>>,
  setDialogText: Dispatch<SetStateAction<string>>
) => {
  const queryClient = useQueryClient();
  return useMutation(() => putBoriGallery(bori_gallery_id, bori_gallery), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-gallery");
    },
  });
};
