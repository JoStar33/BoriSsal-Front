import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAllOrderQuery } from "./useAllOrderQuery";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useAllOrderQuery 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useAllOrderQuery(1, "rhw", null, null),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => expect(result.current.isSuccess).toBe(true)).then(() => {
    const data =  result.current.data || {
      order: [],
      overflow: false
    };
    expect(data.order[0].order_status).toEqual(
      "배송진행"
    );
  });
});

