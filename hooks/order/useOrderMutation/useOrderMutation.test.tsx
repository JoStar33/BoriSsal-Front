import { server } from "@/mocks/server";
import { rest } from "msw";
import { useOrderMutation } from "./useOrderMutation";
import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useOrderMutation 훅 테스트(성공)", async () => {
  const { result } = renderHook(() => useOrderMutation(), {
    wrapper: Wrapper,
  });
  result.current.mutate()
  await waitFor(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
  expect(result.current.isSuccess).toBeTruthy();
});

test("useOrderMutation 훅 테스트(성공)", async () => {
  server.use(
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/order`, (req, res, ctx) => {
      return res(
        ctx.status(500)
      );
    })
  )
  const { result } = renderHook(() => useOrderMutation(), {
    wrapper: Wrapper,
  });
  result.current.mutate()
  await waitFor(() => {
    expect(result.current.isError).toBeTruthy();
  });
  expect(result.current.isError).toBeTruthy();
});