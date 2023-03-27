import { server } from "@/mocks/server";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDeleteOrderMutation } from "./useDeleteOrderMutation";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useDeleteOrderMutation 훅 테스트(성공)", async () => {
  const { result } = renderHook(() => useDeleteOrderMutation("23"), {
    wrapper: Wrapper,
  });
  result.current.mutate()
  await waitFor(() => 
    expect(result.current.isSuccess).toBeTruthy()
  );
});

test("useDeleteOrderMutation 훅 테스트(실패)", async () => {
  server.use(
    rest.delete(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/order/23`, (req, res, ctx) => {
      return res(
        ctx.status(500)
      );
    })
  )
  const { result } = renderHook(() => useDeleteOrderMutation("23"), {
    wrapper: Wrapper,
  });
  result.current.mutate()
  await waitFor(() => expect(result.current.isError).toBeTruthy());
  expect(result.current.isError).toBeTruthy();
});