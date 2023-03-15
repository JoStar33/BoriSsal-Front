import { customAxios } from "../axios/customAxios";

const getUser = (user_id: string) => {
  return customAxios.get(`/user/${user_id}`);
};

const postProfileImage = (image: FormData, user_id: string) => {
  return customAxios.post(`/user/profile-image/${user_id}`, image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { getUser, postProfileImage };
