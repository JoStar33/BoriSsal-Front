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

test('useDeliverAddressMutation 훅 테스트', async () => {
  const { result } = renderHook(() => useDeliverAddressMutation({user_id: '213143', phone_number: '01033334444', address: '경기도 안산시 안산동', address_detail: "104번지"}), {
    wrapper: Wrapper,
  });
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
  //console.log(result.current.data)
  //expect(result.current.data?.config.data.address).toBe("경기도 안산시 안산동")
});