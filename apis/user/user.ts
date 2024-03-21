import { IUser, IUserProfileUpload } from '@/types/user';
import { requests } from '../axios/customAxios';

const getUser = () => {
  return requests.get<IUser>(`/user`);
};

const postProfileImage = (userProfileInfo: IUserProfileUpload) => {
  return requests.post(`/user/profile-image`, userProfileInfo.image, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export { getUser, postProfileImage };
