import { getCategory } from "@/apis/bori-goods/boriGoods";
import { useQuery } from "react-query";

export const useCategoryQuery = () => {
  return useQuery(["category"], () => getCategory());
}
