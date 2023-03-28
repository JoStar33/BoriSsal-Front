
import { patchBoriGoodsImage } from "@/apis/bori-goods/boriGoods";
import { useMutation, useQueryClient } from "react-query";

export const useBoriGoodsImageMutation = (goods_id: string) => {
  const queryClient = useQueryClient();
  return useMutation((bori_goods_image: FormData) => patchBoriGoodsImage(
    goods_id,
    bori_goods_image
  ), {
    onSuccess: () => {
      queryClient.invalidateQueries("bori-goods");
    }
  });
};
