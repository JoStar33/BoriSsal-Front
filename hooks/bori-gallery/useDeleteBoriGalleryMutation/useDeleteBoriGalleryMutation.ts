import { deleteBoriGallery } from "@/apis/bori-gallery/boriGallery";
import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";

export const useDeleteBoriGalleryMutation = (
  bori_gallery_id: string,
  setDialog: Dispatch<SetStateAction<boolean>>,
  setDialogText: Dispatch<SetStateAction<string>>,
  setSuccessDialog: Dispatch<SetStateAction<boolean>>,
  setSuccessDialogText: Dispatch<SetStateAction<string>>
) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => deleteBoriGallery(bori_gallery_id), {
      onSuccess: () => {
        setSuccessDialog(true);
        setSuccessDialogText("해당 갤러리는 삭제됐습니다!")
        queryClient.invalidateQueries("bori-gallery");
      }
    }
  );
};
