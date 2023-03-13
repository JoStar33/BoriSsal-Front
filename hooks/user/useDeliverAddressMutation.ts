import { useMutation, useQueryClient } from "react-query";
import { patchDeliverAddress } from "@/apis/user/deliverAddress";
import { patchDeliverAddressType } from "@/types/deliverAddress";


export const useDeliverAddressMutation = (deliverAddress: patchDeliverAddressType) => {
  const queryClient = useQueryClient();
  return useMutation(() => {
    return patchDeliverAddress(deliverAddress)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries("deliver-address");
    }
  });
};