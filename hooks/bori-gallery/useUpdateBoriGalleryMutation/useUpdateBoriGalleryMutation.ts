import { putBoriGallery } from "@/apis/bori-gallery/boriGallery";
import { errorMessage } from '@/apis/error/customError';
import { IPostBoriGallery } from "@/types/boriGallery";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";

export const useUpdateBoriGalleryMutation = (
  bori_gallery_id: string,
  bori_gallery: IPostBoriGallery,
  setDialog: Dispatch<SetStateAction<boolean>>,
  dialogText: MutableRefObject<string>
) => {
  const queryClient = useQueryClient();
  return useMutation(() => putBoriGallery(bori_gallery_id, bori_gallery), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-gallery");
    },
    onError: (error) => {
      dialogText.current = errorMessage(error);
      setDialog(true);
    }
  });
};
