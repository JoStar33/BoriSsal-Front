import { server } from "@/mocks/server";
import { rest } from "msw";
import { useLoginCheckQuery } from "./useLoginCheckQuery";
import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";


const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test('useLoginCheckQuery 훅 테스트', async () => {
  const { result } = renderHook(() => useLoginCheckQuery(), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
  expect(result.current.isSuccess).toBeTruthy();
});