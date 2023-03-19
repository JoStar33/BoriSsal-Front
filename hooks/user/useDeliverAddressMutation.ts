import { useMutation, useQueryClient } from "react-query";
import { patchDeliverAddress } from "@/apis/user/deliverAddress";
import { IPatchDeliverAddress } from "@/types/deliverAddress";

export const useDeliverAddressMutation = (
  deliverAddress: IPatchDeliverAddress
) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return patchDeliverAddress(deliverAddress);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("deliver-address");
      },
    }
  );
};
