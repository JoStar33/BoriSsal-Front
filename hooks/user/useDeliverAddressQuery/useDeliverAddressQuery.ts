import { getDeliverAddress } from "@/apis/user/deliverAddress";
import { useUserStore } from "@/store/user";
import { useQuery } from "react-query";

export const useDeliverAddressQuery = () => {
  const { user } = useUserStore();
  return useQuery(["deliver-address"], () => getDeliverAddress(user.id));
};
