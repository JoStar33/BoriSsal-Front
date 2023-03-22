import { useQuery } from "react-query";
import { getDeliverAddress } from "@/apis/user/deliverAddress";
import { useSelector } from 'react-redux';
import { RootState } from "@/store";

export const useDeliverAddressQuery = () => {
  const { user } = useSelector((state: RootState) => state.userStore);
  return useQuery(["deliver-address"], () => getDeliverAddress(user.id));
};
