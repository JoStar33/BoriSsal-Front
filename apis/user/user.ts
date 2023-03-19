import { IUserProfileUpload } from "@/types/user";
import { customAxios } from "../axios/customAxios";

const getUser = (user_id: string) => {
  return customAxios.get(`/user/${user_id}`);
};

const postProfileImage = (userProfileInfo: IUserProfileUpload) => {
  return customAxios.post(`/user/profile-image/${userProfileInfo.user_id}`, userProfileInfo.image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { getUser, postProfileImage };
