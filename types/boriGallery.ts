export interface IPostBoriGallery {
  bori_gallery_title: string;
  bori_gallery_desc: string;
}

export interface IBoriGallery {
  _id: string;
  bori_gallery_title: string;
  bori_gallery_desc: string;
  bori_gallery_like: number;
  bori_gallery_image: string;
  created_at: Date;
};