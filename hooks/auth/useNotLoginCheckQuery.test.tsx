import { waitFor, renderHook } from "@testing-library/react";
import { useNotLoginCheckQuery } from "./useNotLoginCheckQuery";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};


test('useNotLoginCheckQuery 훅 테스트(성공)', async () => {
  const { result } = renderHook(() => useNotLoginCheckQuery(), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
  expect(result.current.isSuccess).toBeTruthy();
});