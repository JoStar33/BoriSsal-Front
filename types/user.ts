export interface IUser {
  email: string;
  nick: string;
  sns_id: string;
  profile_image: string;
  created_at: Date;
  user_bori_goods_like: string[];
  user_bori_gallery_like: string[];
};

export interface IUserProfileUpload {
  image: FormData;
};
