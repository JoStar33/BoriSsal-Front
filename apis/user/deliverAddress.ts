import { putDeliverAddressType } from "@/types/deliverAddress";
import { customAxios } from "../axios/customAxios";

const getDeliverAddress = (user_id: string) => {
  return customAxios.get(`/deliver-address/${user_id}`);
}

const putDeliverAddress = (deliverAddress: putDeliverAddressType) => {
  return customAxios.put('/deliver-address', deliverAddress)
}

export { getDeliverAddress, putDeliverAddress };