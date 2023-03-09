import { useQuery } from "react-query";
import { getDeliverAddress } from "@/apis/user/deliverAddress";


type propsType = {
  user_id: string
}

export const useDeliverAddressQuery = ({user_id}: propsType) => {
  return useQuery(['deliver-address'], async () => await getDeliverAddress(user_id), {
    onSuccess(data) {
        return data;
    },
  });
};
