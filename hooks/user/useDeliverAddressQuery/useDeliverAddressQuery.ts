import { getDeliverAddress } from "@/apis/user/deliverAddress";
import { useQuery } from "react-query";

export const useDeliverAddressQuery = () => {
  return useQuery(["deliver-address"], () => getDeliverAddress());
};
