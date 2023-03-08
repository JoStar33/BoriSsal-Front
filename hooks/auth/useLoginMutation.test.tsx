import { waitFor } from "@testing-library/react";
import { server } from "@/mocks/server";
import { rest } from "msw";
import { useLoginMutation } from "./useLoginMutation";
import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook } from "@testing-library/react";
//라우터 모킹
jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    /** Recoil의 훅 사용을 위해 RecoilRoot로 컴포넌트를 래핑한다  */
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test('useJoinQuery 훅 테스트', async () => {
  server.use(
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/join`, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          _id: 3333,
          email: "user12@test.com",
          nick: "클라나이"
        })
      );
    })
  );
  const { result } = renderHook(() => useLoginMutation(loginInfo: {email: 'test@naver.com', password: '123123123'}), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    result.current.mutate();
  }).then(() => {
    expect(result.current.isSuccess).toBe(true);
  });
});