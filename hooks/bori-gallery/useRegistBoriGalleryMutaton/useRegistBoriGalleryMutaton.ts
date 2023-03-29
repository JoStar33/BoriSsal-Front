import { postBoriGallery } from "@/apis/bori-gallery/boriGallery";
import { IPostBoriGallery } from "@/types/boriGallery";
import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";

export const useRegistBoriGalleryMutaton = (
  bori_gallery: IPostBoriGallery,
  bori_gallery_image: FormData,
  setGalleryInfo: Dispatch<SetStateAction<IPostBoriGallery>>,
  setImage: Dispatch<any>
) => {
  return useMutation(() => postBoriGallery(bori_gallery, bori_gallery_image), {
    onSuccess: () => {
      bori_gallery_image = new FormData();
      setGalleryInfo({
        bori_gallery_title: "",
        bori_gallery_desc: "",
      });
      setImage("");
    }
  });
};
