import { waitFor } from "@testing-library/react";
import { server } from "@/mocks/server";
import { rest } from "msw";
import { useJoinMutation } from "./useJoinMutation";
import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook } from "@testing-library/react";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    /** Recoil의 훅 사용을 위해 RecoilRoot로 컴포넌트를 래핑한다  */
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test('useJoinMutation 훅 테스트', async () => {
  const { result } = renderHook(() => useJoinMutation({email: 'test@naver.com', nick: 'jojo', password: '123123123'}), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    result.current.mutate();
  }).then(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
});

test('useJoinMutation 훅 테스트 실패 케이스', async () => {
  server.use(
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/join`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  const { result } = renderHook(() => useJoinMutation({email: 'test@naver.com', nick: 'jojo', password: '123123123'}), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    result.current.mutate();
  }).then(() => {
    //console.log(result.current);
    expect(result.current.isError).toBeTruthy();
  });
});