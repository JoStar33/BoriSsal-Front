import { postBoriGoods } from "@/apis/bori-goods/boriGoods";
import { IPostBoriGoods } from "@/types/boriGoods";
import { useMutation } from "react-query";

export const useRegistBoriGoodsMutation = (category_id: string, bori_goods: IPostBoriGoods, bori_goods_image: FormData) => {
  return useMutation(() => postBoriGoods(category_id, bori_goods, bori_goods_image)
  );
};
