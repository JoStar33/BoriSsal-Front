import { patchBoriGalleryImage } from "@/apis/bori-gallery/boriGallery";
import { errorMessage } from "@/apis/error/customError";
import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";

export const useBoriGalleryImageMutation = (
  bori_gallery_id: string,
  setDialog: Dispatch<SetStateAction<boolean>>,
  setDialogText: Dispatch<SetStateAction<string>>,
  setSuccessDialog: Dispatch<SetStateAction<boolean>>,
  setSuccessDialogText: Dispatch<SetStateAction<string>>
) => {
  const queryClient = useQueryClient();
  return useMutation(
    (bori_gallery_image: FormData) =>
      patchBoriGalleryImage(bori_gallery_id, bori_gallery_image),
    {
      onSuccess: () => {
        setSuccessDialog(true);
        setSuccessDialogText("이미지 업로드가 성공했습니다!");
        queryClient.invalidateQueries("bori-gallery");
      },
      onError: (error) => {
        setDialog(true);
        setDialogText(errorMessage(error));
      }
    }
  );
};
