import { IDeliverAddress, IPatchDeliverAddress } from "@/types/deliverAddress";
import { customAxios } from "../axios/customAxios";

const getDeliverAddress = (user_id: string) => {
  const deliverAddresss = customAxios.get(`/deliver-address/${user_id}`)
    .then(res => res)
    .then(res => res.data)
    .then((data: IDeliverAddress) => data);
  return deliverAddresss;
};

const patchDeliverAddress = (deliverAddress: IPatchDeliverAddress) => {
  return customAxios.patch("/deliver-address", deliverAddress);
};

export { getDeliverAddress, patchDeliverAddress };
