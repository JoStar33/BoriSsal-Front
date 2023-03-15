import { useQuery } from "react-query";
import { getDeliverAddress } from "@/apis/user/deliverAddress";
import { deliverAddressType } from "@/types/deliverAddress";

type propsType = {
  user_id: string;
};

export const useDeliverAddressQuery = ({ user_id }: propsType) => {
  return useQuery(["deliver-address"], () => getDeliverAddress(user_id));
};
