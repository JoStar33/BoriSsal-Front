import { useMutation, useQueryClient } from "react-query";
import { putDeliverAddress } from "@/apis/user/deliverAddress";
import { putDeliverAddressType } from "@/types/deliverAddress";


export const useDeliverAddressMutation = (deliverAddress: putDeliverAddressType) => {
  const queryClient = useQueryClient();
  return useMutation(() => putDeliverAddress(deliverAddress), {
    onSuccess: () => {
      queryClient.invalidateQueries("deliver-address");
    }
  });
};