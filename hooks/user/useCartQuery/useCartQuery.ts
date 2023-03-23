import { getCart } from "@/apis/user/cart";
import { RootState } from "@/store";
import { IGetCartGoods } from "@/types/cart";
import { useQuery, UseQueryResult } from "react-query";
import { useSelector } from "react-redux";

export const useCartQuery = (): UseQueryResult<IGetCartGoods[]> => {
  const { user } = useSelector((state: RootState) => state.userStore);
  return useQuery(['cart'], () => 
    getCart(user.id));
};
