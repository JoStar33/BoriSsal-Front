import { postBoriGallery } from "@/apis/bori-gallery/boriGallery";
import { IPostBoriGallery } from '@/types/boriGallery';
import { useMutation } from "react-query";

export const useRegistBoriGalleryMutaton = (bori_gallery: IPostBoriGallery, bori_gallery_image: FormData) => {
  return useMutation(() => postBoriGallery(bori_gallery, bori_gallery_image)
  );
};
