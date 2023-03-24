import { postOrder } from "@/apis/order/order";
import { useCartStore } from "@/store/cart";
import { useUserStore } from "@/store/user";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

export const useOrderMutation = () => {
  const { user } = useUserStore();
  const { cart } = useCartStore();
  const router = useRouter();
  return useMutation(() => postOrder(user.id, cart), {
    onSuccess: () => {
      router.push('/complete-order');
    }
  });
};
