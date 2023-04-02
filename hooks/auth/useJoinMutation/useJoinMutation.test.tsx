import { server } from "@/mocks/server";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useJoinMutation } from "./useJoinMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useJoinMutation 훅 테스트", async () => {
  const setState = jest.fn() as any;
  const { result } = renderHook(
    () =>
      useJoinMutation({
        joinInfo: {
          email: "test@naver.com",
          nick: "jojo",
          password: "123123123",
        },
        setDialog: setState,
        dialogText: setState,
      }),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});

test("useJoinMutation 훅 테스트 실패 케이스", async () => {
  const setState = jest.fn() as any;
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/join`,
      (req, res, ctx) => {
        return res(ctx.status(500));
      }
    )
  );
  const { result } = renderHook(
    () =>
      useJoinMutation({
        joinInfo: {
          email: "test@naver.com",
          nick: "jojo",
          password: "123123123",
        },
        setDialog: setState,
        dialogText: setState,
      }),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isError).toBeTruthy());
});
