import { getCart } from "@/apis/user/cart";
import { RootState } from "@/store";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

export const useCartQuery = () => {
  const { user } = useSelector((state: RootState) => state.userStore);
  return useQuery(['cart'], () => getCart(user.id));
};
