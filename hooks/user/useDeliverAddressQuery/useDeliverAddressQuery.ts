import { useQuery } from "react-query";
import { getDeliverAddress } from "@/apis/user/deliverAddress";

interface IProps {
  user_id: string;
};

export const useDeliverAddressQuery = ({ user_id }: IProps) => {
  return useQuery(["deliver-address"], () => getDeliverAddress(user_id));
};
