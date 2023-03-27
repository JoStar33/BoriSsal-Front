import { server } from "@/mocks/server";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useFindPassWordMutation } from "../useFindPassWordMutation/useFindPassWordMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useFindPassWordMutation 훅 테스트", async () => {
  const { result } = renderHook(() => useFindPassWordMutation('jojo@naver.com'), {
    wrapper: Wrapper,
  });
  result.current.mutate()
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});

test("useFindPassWordMutation 훅 테스트(실패 케이스)", async () => {
  server.use(    
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/find/password`, (req, res, ctx) => {
      return res(
        ctx.status(500),
      );
    })
  )
  const { result } = renderHook(() => useFindPassWordMutation('jojo@naver.com'), {
    wrapper: Wrapper,
  });
  result.current.mutate()
  await waitFor(() => expect(result.current.isError).toBeTruthy());
});