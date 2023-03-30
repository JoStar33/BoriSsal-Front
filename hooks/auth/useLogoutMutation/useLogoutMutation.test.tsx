import { server } from "@/mocks/server";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useLogoutMutation } from "./useLogoutMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const setState = jest.fn() as any;

test("useLogoutMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(() => useLogoutMutation(setState, setState), {
    wrapper: Wrapper,
  });
  result.current.mutate()
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});

test("useLogoutMutation 훅을 통해 store에 정상적으로 유저의 정보를 리셋시키는지 확인.", async () => {
  const { result } = renderHook(() => useLogoutMutation(setState, setState), {
    wrapper: Wrapper,
  });
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy()).then(
    () => {
    }
  );
});

test("useLogoutMutation 훅이 실패했을 경우.", async () => {
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/logout`,
      (req, res, ctx) => {
        return res(ctx.status(500));
      }
    )
  );
  const { result } = renderHook(() => useLogoutMutation(setState, setState), {
    wrapper: Wrapper,
  });
  result.current.mutate();
  await waitFor(() => expect(result.current.isError).toBeTruthy()).then(() => {
  });
});
