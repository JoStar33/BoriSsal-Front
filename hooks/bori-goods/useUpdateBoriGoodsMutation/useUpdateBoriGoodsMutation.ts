import { putBorigoods } from "@/apis/bori-goods/boriGoods";
import { IPostBoriGoods } from "@/types/boriGoods";
import { useMutation, useQueryClient } from "react-query";

export const useUpdateBoriGoodsMutation = (category_id: string, bori_goods: IPostBoriGoods, bori_goods_id: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => putBorigoods(bori_goods, category_id, bori_goods_id), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-goods");
    }
  });
};
