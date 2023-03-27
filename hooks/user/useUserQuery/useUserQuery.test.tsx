import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useUserQuery } from "./useUserQuery";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useUserQuery 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useUserQuery(),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => expect(result.current.isSuccess).toBe(true)).then(() => {
    if(!result.current.data) {
      return;
    }
    expect(result.current.data.email).toBe('rhwdf@gmail.com');
  })
});
