import { patchDeliverAddressType } from "@/types/deliverAddress";
import { customAxios } from "../axios/customAxios";

const getDeliverAddress = (user_id: string) => {
  return customAxios.get(`/deliver-address/${user_id}`);
};

const patchDeliverAddress = (deliverAddress: patchDeliverAddressType) => {
  return customAxios.patch("/deliver-address", deliverAddress);
};

export { getDeliverAddress, patchDeliverAddress };
