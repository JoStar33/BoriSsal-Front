import { deleteBorigoods } from "@/apis/bori-goods/boriGoods";
import { useMutation, useQueryClient } from "react-query";

export const useDeleteBoriGoodsMutation = (
  bori_goods_id: string
) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => deleteBorigoods(bori_goods_id), {
      onSuccess: () => {
        queryClient.invalidateQueries("bori-goods");
      }
    }
  );
};
