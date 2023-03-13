import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useDeliverAddressQuery } from "./useDeliverAddressQuery";
const queryClient = new QueryClient();


const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test('useDeliverAddressQuery 정상동작 확인 테스트', async () => {
  const { result } = renderHook(() => useDeliverAddressQuery({user_id: "23"}), {
    wrapper: Wrapper,
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(true)).then(() => {
    console.log(result.current);
    expect(result.current.data?.data.address).toEqual("경기도 안양시 동안구 호랑이아파트");
  });
});
