import { postOrder } from "@/apis/order/order";
import { useCartStore } from "@/store/cart";
import { usePageStore } from "@/store/page";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

export const useOrderMutation = () => {
  const { setPageState } = usePageStore();
  const { cart } = useCartStore();
  const router = useRouter();
  return useMutation(() => postOrder(cart), {
    onSuccess: () => {
      setPageState('complete-order');
      router.push('/complete-order');
    }
  });
};
