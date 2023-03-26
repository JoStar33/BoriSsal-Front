import { getCart } from "@/apis/user/cart";
import { IGetCartGoods } from "@/types/cart";
import { useQuery, UseQueryResult } from "react-query";

export const useCartQuery = (): UseQueryResult<IGetCartGoods[]> => {
  return useQuery(['cart'], () => 
    getCart());
};
