import { getBoriGallery } from "@/apis/bori-gallery/boriGallery";
import { useQuery } from "react-query";

export const useBoriGalleryQuery = () => {
  return useQuery(["bori-gallery"], () => getBoriGallery());
}