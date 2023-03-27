import { server } from "@/mocks/server";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useBoriGoodsChildReplyMutation } from "./useBoriGoodsChildReplyMutation";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useBoriGoodsChildReplyMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useBoriGoodsChildReplyMutation('jojo@naver.com', "23"),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate('gogogogogo_jose');
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});

test("useBoriGoodsChildReplyMutation 실패 케이스 확인 테스트", async () => {
  server.use(
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-goods-reply/child`, (req, res, ctx) => {
      return res(
        ctx.status(500)
      )
    })
  );
  const { result } = renderHook(
    () => useBoriGoodsChildReplyMutation('jojo@naver.com', "23"),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate('gogogogogo_jose');
  await waitFor(() => 
    expect(result.current.isError).toBeTruthy()
  );
});
