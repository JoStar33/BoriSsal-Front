import { getCart } from "@/apis/user/cart";
import { useUserStore } from "@/store/user";
import { IGetCartGoods } from "@/types/cart";
import { useQuery, UseQueryResult } from "react-query";

export const useCartQuery = (): UseQueryResult<IGetCartGoods[]> => {
  const { user } = useUserStore();
  return useQuery(['cart'], () => 
    getCart(user.id));
};
