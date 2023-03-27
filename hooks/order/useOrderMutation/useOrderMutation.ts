import { postOrder } from "@/apis/order/order";
import { useCartStore } from "@/store/cart";
import { usePageStore } from "@/store/page";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

export const useOrderMutation = (price: number) => {
  const { setPageState } = usePageStore();
  const { cart } = useCartStore();
  const router = useRouter();
  return useMutation(() => postOrder(price, cart), {
    onSuccess: () => {
      setPageState('complete-order');
      router.push('/complete-order');
    }
  });
};
