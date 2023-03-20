import { getBoriGoodsReply } from "@/apis/bori-goods/boriGoods";
import { useQuery } from "react-query";

export const useBoriGoodsReplyQuery = (goods_id: string) => {
  return useQuery(["bori-goods-reply"], () => getBoriGoodsReply(goods_id));
};
