import { postOrder } from "@/apis/order/order";
import { useCartStore } from "@/store/cart";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

export const useOrderMutation = (price: number) => {
  const { cart } = useCartStore();
  const router = useRouter();
  return useMutation(() => postOrder(price, cart), {
    onSuccess: () => {
      router.push('/complete-order');
    }
  });
};
