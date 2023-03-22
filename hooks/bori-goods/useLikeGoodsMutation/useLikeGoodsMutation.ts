import { dislikeGoods, likeGoods } from "@/apis/bori-goods/boriGoods";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const useLikeGoodsMutation = (goods_id: string) => {
  const { user } = useSelector((state: RootState) => state.userStore);
  return useMutation(() =>
    user.user_bori_goods_like.find((likeGoods) => likeGoods === goods_id)
      ? dislikeGoods(user.id, goods_id)
      : likeGoods(user.id, goods_id)
  );
};
