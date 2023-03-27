import { server } from "@/mocks/server";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useLoginCheckQuery } from "./useLoginCheckQuery";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useLoginCheckQuery 훅 테스트(성공)", async () => {
  const { result } = renderHook(() => useLoginCheckQuery(), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
  expect(result.current.isSuccess).toBeTruthy();
});

test("useFindPassWordMutation 훅 테스트(실패 케이스)", async () => {
  server.use(    
    rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/is-login`, (req, res, ctx) => {
      return res(
        ctx.status(500),
      );
    })
  )
  const { result } = renderHook(() => useLoginCheckQuery(), {
    wrapper: Wrapper,
  });
  await waitFor(() => expect(result.current.isError).toBeTruthy());
});