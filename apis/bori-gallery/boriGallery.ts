import { IBoriGallery, IPostBoriGallery } from "@/types/boriGallery";
import { IReplyMutation } from "@/types/reply";
import { customAxios } from "../axios/customAxios";


const getBoriGalleryReply = (gallery_id: string, limit: number) => {
  const boriGalleryReply = customAxios.get(`/bori-gallery-reply/${gallery_id}/${limit}`)
    .then(res => res)
    .then(res => res.data)
    .then((data: IReplyMutation) => data)
  return boriGalleryReply;
};

const getBoriGallery = () => {
  const boriGallery = customAxios.get('/bori-gallery')
    .then(res => res)
    .then(res => res.data)
    .then((data: IBoriGallery[]) => data);
  return boriGallery
}

const postBoriGalleryReply = (email: string, bori_gallery_id: string, content: string) => {
  return customAxios.post(`/bori-gellery-reply`, {
    email: email,
    bori_gallery_id: bori_gallery_id,
    content: content,
  })
};

const postBoriGalleryChildReply = (email: string, content: string, reply_id: string) => {
  return customAxios.post(`/bori-gallery-reply/child`, {
    reply_id: reply_id,
    email: email,
    content: content,
  })
};

const postBoriGallery = (bori_gallery: IPostBoriGallery, bori_gallery_image: FormData) => {
  bori_gallery_image.append('bori_gallery', JSON.stringify(bori_gallery));
  return customAxios.post('/bori-gallery', bori_gallery_image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const likeGallery = (gallery_id: string) => {
  return customAxios.patch(`/bori-gallery/like`, {
    bori_gallery_id: gallery_id
  });
};

const dislikeGallery = (gallery_id: string) => {
  return customAxios.patch(`/bori-gallery/dislike`, {
    bori_gallery_id: gallery_id
  });
};

const putBoriGallery = (bori_gallery_id: string, bori_gallery: IPostBoriGallery) => {
  return customAxios.put(`/bori-gallery/${bori_gallery_id}`, bori_gallery);
};

const deleteBoriGallery = (bori_gallery_id: string) => {
  return customAxios.delete(`/bori-gallery/${bori_gallery_id}`);
};

const patchBoriGalleryImage = (bori_gallery_id: string, bori_gallery_image: FormData) => {
  return customAxios.patch(`/bori-gallery/image/${bori_gallery_id}`, bori_gallery_image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { getBoriGalleryReply, getBoriGallery, likeGallery, dislikeGallery, postBoriGallery, postBoriGalleryReply, postBoriGalleryChildReply, putBoriGallery, patchBoriGalleryImage, deleteBoriGallery };
 
