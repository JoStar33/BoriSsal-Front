import { getCategory } from "@/apis/bori-goods/boriGoods";
import { useQuery } from "react-query";

export const useCategoryQuery = () => {
  return useQuery(["category"], () => getCategory(), {
    onSuccess(data) {
      data.unshift({
        _id: '0',
        category_name: '전체'
      });
    },
  });
}
