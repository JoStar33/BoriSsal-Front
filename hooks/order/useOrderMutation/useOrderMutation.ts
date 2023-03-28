import { postOrder } from "@/apis/order/order";
import { useCartStore } from "@/store/cart";
import { IPostDeliverAddress } from '@/types/deliverAddress';
import { useRouter } from "next/router";
import { useMutation } from "react-query";

export const useOrderMutation = (price: number, deliverAddress: IPostDeliverAddress) => {
  const { cart } = useCartStore();
  const router = useRouter();
  return useMutation(() => postOrder(price, cart, deliverAddress), {
    onSuccess: () => {
      router.push('/complete-order');
    }
  });
};
