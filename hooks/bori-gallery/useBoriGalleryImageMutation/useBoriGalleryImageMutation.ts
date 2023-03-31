import { patchBoriGalleryImage } from "@/apis/bori-gallery/boriGallery";
import { errorMessage } from "@/apis/error/customError";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";

export const useBoriGalleryImageMutation = (
  bori_gallery_id: string,
  setDialog: Dispatch<SetStateAction<boolean>>,
  dialogText: MutableRefObject<string>,
  setSuccessDialog: Dispatch<SetStateAction<boolean>>,
  successDialogText: MutableRefObject<string>
) => {
  const queryClient = useQueryClient();
  return useMutation(
    (bori_gallery_image: FormData) =>
      patchBoriGalleryImage(bori_gallery_id, bori_gallery_image),
    {
      onSuccess: () => {
        setSuccessDialog(true);
        successDialogText.current = "이미지 업로드가 성공했습니다!"
        queryClient.invalidateQueries("bori-gallery");
      },
      onError: (error) => {
        setDialog(true);
        dialogText.current = errorMessage(error);
      }
    }
  );
};
