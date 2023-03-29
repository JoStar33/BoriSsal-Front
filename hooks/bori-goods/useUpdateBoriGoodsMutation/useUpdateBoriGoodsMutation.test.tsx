import { server } from "@/mocks/server";
import { initPostBoriGoods } from "@/utils/initData";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useUpdateBoriGoodsMutation } from "./useUpdateBoriGoodsMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
test("useUpdateBoriGoodsMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useUpdateBoriGoodsMutation('23', initPostBoriGoods, '23'),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});


test("useUpdateBoriGoodsMutation 실패케이스 확인 테스트", async () => {
  server.use(
    rest.put(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-goods/23`, (req, res, ctx) => {
      return res(
        ctx.status(500)
      )
    })
  );
  const { result } = renderHook(
    () => useUpdateBoriGoodsMutation('23', initPostBoriGoods, '23'),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isError).toBeTruthy());
});