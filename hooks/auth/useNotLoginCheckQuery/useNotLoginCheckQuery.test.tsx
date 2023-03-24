
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useNotLoginCheckQuery } from "./useNotLoginCheckQuery";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

test("useNotLoginCheckQuery 훅 테스트(성공)", async () => {
  const { result } = renderHook(() => useNotLoginCheckQuery(), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
  expect(result.current.isSuccess).toBeTruthy();
});