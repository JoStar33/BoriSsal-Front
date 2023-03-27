import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useOrderQuery } from "./useOrderQuery";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useOrderQuery 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useOrderQuery(),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => expect(result.current.isSuccess).toBe(true)).then(() => {
    const data =  result.current.data || [];
    expect(data[0].order_status).toEqual(
      "배송진행"
    );
  });
});

