import { dislikeGoods, likeGoods } from "@/apis/bori-goods/boriGoods";
import { useUserStore } from "@/store/user";
import { useMutation } from "react-query";

export const useLikeGoodsMutation = (goods_id: string) => {
  const { user } = useUserStore();
  return useMutation(() =>
    user.user_bori_goods_like.find((likeGoods) => likeGoods === goods_id)
      ? dislikeGoods(user.id, goods_id)
      : likeGoods(user.id, goods_id)
  );
};
