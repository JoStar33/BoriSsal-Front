import { IBoriGallery, IPostBoriGallery } from '@/types/boriGallery';
import { IReplyMutation } from '@/types/reply';
import { requests } from '../axios/customAxios';

const getBoriGalleryReply = async (gallery_id: string, limit: number) => {
  const boriGalleryReply = await requests.get<IReplyMutation>(`/bori-gallery-reply/${gallery_id}/${limit}`);
  return boriGalleryReply;
};

const getBoriGallery = async () => {
  const boriGallery = await requests.get<IBoriGallery[]>('/bori-gallery');
  return boriGallery;
};

const postBoriGalleryReply = async (email: string, bori_gallery_id: string, content: string) => {
  return await requests.post(`/bori-gallery-reply`, {
    email: email,
    bori_gallery_id: bori_gallery_id,
    content: content,
  });
};

const postBoriGalleryChildReply = async (email: string, content: string, reply_id: string) => {
  return await requests.post(`/bori-gallery-reply/child`, {
    reply_id: reply_id,
    email: email,
    content: content,
  });
};

const postBoriGallery = async (bori_gallery: IPostBoriGallery, bori_gallery_image: FormData) => {
  bori_gallery_image.append('bori_gallery', JSON.stringify(bori_gallery));
  return await requests.post('/bori-gallery', bori_gallery_image, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const likeGallery = async (gallery_id: string) => {
  return await requests.patch(`/bori-gallery/like`, {
    bori_gallery_id: gallery_id,
  });
};

const dislikeGallery = async (gallery_id: string) => {
  return await requests.patch(`/bori-gallery/dislike`, {
    bori_gallery_id: gallery_id,
  });
};

const putBoriGallery = async (bori_gallery_id: string, bori_gallery: IPostBoriGallery) => {
  return await requests.put(`/bori-gallery/${bori_gallery_id}`, bori_gallery);
};

const deleteBoriGallery = async (bori_gallery_id: string) => {
  return await requests.delete(`/bori-gallery/${bori_gallery_id}`);
};

const patchBoriGalleryImage = async (bori_gallery_id: string, bori_gallery_image: FormData) => {
  return await requests.patch(`/bori-gallery/image/${bori_gallery_id}`, bori_gallery_image, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export {
  getBoriGalleryReply,
  getBoriGallery,
  likeGallery,
  dislikeGallery,
  postBoriGallery,
  postBoriGalleryReply,
  postBoriGalleryChildReply,
  putBoriGallery,
  patchBoriGalleryImage,
  deleteBoriGallery,
};
