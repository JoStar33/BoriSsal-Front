import { IUser, IUserProfileUpload } from "@/types/user";
import { customAxios } from "../axios/customAxios";

const getUser = () => {
  return customAxios.get(`/user`)
    .then(res => res)
    .then(res => res.data)
    .then((data: IUser) => data);;
};

const postProfileImage = (userProfileInfo: IUserProfileUpload) => {
  return customAxios.post(`/user/profile-image`, userProfileInfo.image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { getUser, postProfileImage };
