import { dislikeGoods, likeGoods } from "@/apis/bori-goods/boriGoods";
import { useMutation, useQueryClient } from "react-query";

export const useLikeGoodsMutation = (user_bori_goods_like: string[], goods_id: string) => {
  const queryClient = useQueryClient();
  return useMutation(() =>
    user_bori_goods_like.find((likeGoods) => likeGoods === goods_id)
      ? dislikeGoods(goods_id)
      : likeGoods(goods_id), {
        onSuccess: () => {
          queryClient.invalidateQueries("user");
        }
      }
  );
};
