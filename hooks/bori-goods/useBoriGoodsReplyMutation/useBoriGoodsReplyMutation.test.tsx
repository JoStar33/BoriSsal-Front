import { server } from "@/mocks/server";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useBoriGoodsReplyMutation } from "./useBoriGoodsReplyMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useBoriGoodsReplyMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useBoriGoodsReplyMutation("jojo@naver.com", '23'),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate('gogo_jose');
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});


test("useBoriGoodsChildReplyMutation 실패 케이스 확인 테스트", async () => {
  server.use(
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-goods-reply`, (req, res, ctx) => {
      return res(
        ctx.status(500)
      )
    })
  );
  const { result } = renderHook(
    () => useBoriGoodsReplyMutation('jojo@naver.com', "23"),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate('gogogogogo_jose');
  await waitFor(() => 
    expect(result.current.isError).toBeTruthy()
  );
});
