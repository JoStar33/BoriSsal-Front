import { customAxios } from "../axios/customAxios";


const getBoriGalleryReply = (gallery_id: string) => {
  return customAxios.get(`/bori-gallery-reply/${gallery_id}`)
};

export { getBoriGalleryReply };