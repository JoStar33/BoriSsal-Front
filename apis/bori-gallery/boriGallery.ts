import { IReplyMutation } from "@/types/reply";
import { customAxios } from "../axios/customAxios";


const getBoriGalleryReply = (gallery_id: string) => {
  const boriGalleryReply = customAxios.get(`/bori-gallery-reply/${gallery_id}`)
    .then(res => res)
    .then(res => res.data)
    .then((data: IReplyMutation) => data)
  return boriGalleryReply;
};

export { getBoriGalleryReply };

