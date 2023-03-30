import { postBoriGallery } from "@/apis/bori-gallery/boriGallery";
import { IPostBoriGallery } from "@/types/boriGallery";
import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import { errorMessage } from './../../../apis/error/customError';

export const useRegistBoriGalleryMutaton = (
  bori_gallery: IPostBoriGallery,
  bori_gallery_image: FormData,
  setGalleryInfo: Dispatch<SetStateAction<IPostBoriGallery>>,
  setImage: Dispatch<any>,
  setDialog: Dispatch<SetStateAction<boolean>>,
  setDialogText: Dispatch<SetStateAction<string>>,
  setSuccessDialog: Dispatch<SetStateAction<boolean>>,
  setSuccessDialogText: Dispatch<SetStateAction<string>>
) => {
  return useMutation(() => postBoriGallery(bori_gallery, bori_gallery_image), {
    onSuccess: () => {
      bori_gallery_image = new FormData();
      setGalleryInfo({
        bori_gallery_title: "",
        bori_gallery_desc: "",
      });
      setImage("");
      setSuccessDialogText("보리 갤러리 등록이 성공했습니다!");
      setSuccessDialog(true);
    },
    onError: (error) => {
      setDialog(true);
      setDialogText(errorMessage(error));
    }
  });
};
