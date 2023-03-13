import { customAxios } from "../axios/customAxios";

const getUser = (user_id: string) => {
  return customAxios.get(`/user/${user_id}`);
}

const postProfileImage = (image: FormData, user_id: string) => {
  return customAxios.post(`/user/${user_id}`, image);
}

export { getUser, postProfileImage };