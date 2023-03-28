import { getBoriGoods } from "@/apis/bori-goods/boriGoods";
import { useQuery } from "react-query";

export const useBoriGoodsQuery = () => {
  return useQuery(["bori-goods"], () => getBoriGoods());
}
