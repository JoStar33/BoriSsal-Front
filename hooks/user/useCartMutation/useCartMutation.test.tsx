import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useCartMutation } from "./useCartMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useDeliverAddressMutation 훅 테스트", async () => {
  const { result } = renderHook(
    () =>
      useCartMutation({
        bori_goods_id: "231",
        bori_goods_name: "왓",
        bori_goods_image: "/none",
        bori_goods_count: 1,
        bori_goods_price: 30000
      }),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});
