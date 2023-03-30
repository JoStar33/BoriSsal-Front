import { deleteBoriGallery } from "@/apis/bori-gallery/boriGallery";
import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const useDeleteBoriGalleryMutation = (
  bori_gallery_id: string,
  setDialog: Dispatch<SetStateAction<boolean>>,
  setDialogText: Dispatch<SetStateAction<string>>
) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => deleteBoriGallery(bori_gallery_id), {
      onSuccess: () => {
        queryClient.invalidateQueries("bori-gallery");
      },
      onError: (error) => {
        setDialog(true);
        setDialogText(errorMessage(error));
      }
    }
  );
};
