
import { getBoriGalleryReply } from "@/apis/bori-gallery/boriGallery";
import { useQuery } from "react-query";

export const useBoriGalleryReplyQuery = (gallery_id: string) => {
  return useQuery(["bori-gallery-reply"], () => getBoriGalleryReply(gallery_id));
};
