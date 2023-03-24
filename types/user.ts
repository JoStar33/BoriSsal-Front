export interface IUser {
  id: string;
  email: string;
  nick: string;
  sns_id: string;
  profile_image: string;
  user_role: number;
  created_at: Date;
  user_bori_goods_like: string[];
  user_bori_gallery_like: string[];
};

export interface IUserProfileUpload {
  user_id: string;
  image: FormData;
};
