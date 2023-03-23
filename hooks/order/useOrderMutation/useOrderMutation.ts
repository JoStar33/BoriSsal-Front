import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { postOrder } from "@/apis/order/order";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const useOrderMutation = () => {
  const { user } = useSelector((state: RootState) => state.userStore);
  const { cart } = useSelector((state: RootState) => state.cartStore);
  const router = useRouter();
  return useMutation(() => postOrder(user.id, cart), {
    onSuccess: () => {
      router.push('/complete-order');
    }
  });
};
