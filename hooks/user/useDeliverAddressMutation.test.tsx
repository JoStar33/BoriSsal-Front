import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useDeliverAddressMutation } from "./useDeliverAddressMutation";
import { useDeliverAddressQuery } from "./useDeliverAddressQuery";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useDeliverAddressMutation 훅 테스트", async () => {
  const { result } = renderHook(
    () =>
      useDeliverAddressMutation({
        user_id: "213143",
        address_info: "01033334444",
        address_type: "phone_number",
      }),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
  //expect(result.current.data?.config.data.address).toBe("경기도 안산시 안산동")
});
