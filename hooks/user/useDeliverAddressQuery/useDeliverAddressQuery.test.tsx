
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDeliverAddressQuery } from "./useDeliverAddressQuery";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

test("useDeliverAddressQuery 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useDeliverAddressQuery(),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => expect(result.current.isSuccess).toBe(true)).then(() => {
    expect(result.current.data?.address).toEqual(
      "경기도 안양시 동안구 호랑이아파트"
    );
  });
});
