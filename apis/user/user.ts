import { customAxios } from "../axios/customAxios";

const getUser = (user_id: string) => {
  return customAxios.get(`/user/${user_id}`);
}
export { getUser };