import { customAxios } from "../axios/customAxios";

const getDeliverAddress = (user_id: string) => {
  return customAxios.get(`/deliver-address/${user_id}`);
}

export { getDeliverAddress };