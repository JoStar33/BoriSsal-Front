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
      useCartMutation('23', {
        product_id: "231",
        product_name: "왓",
        product_image: "/none",
        product_stock: 1,
        product_price: 30000
      }),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
  //expect(result.current.data?.config.data.address).toBe("경기도 안산시 안산동")
});
