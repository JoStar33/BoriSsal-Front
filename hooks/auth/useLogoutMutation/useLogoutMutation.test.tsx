import { server } from "@/mocks/server";
import { useUserStore } from "@/store/user";
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

test("useLogoutMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(() => useLogoutMutation(), {
    wrapper: Wrapper,
  });
  result.current.mutate()
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});

test("useLogoutMutation 훅을 통해 store에 정상적으로 유저의 정보를 리셋시키는지 확인.", async () => {
  const current = renderHook(() => useUserStore());
  const { result } = renderHook(() => useLogoutMutation(), {
    wrapper: Wrapper,
  });
  result.current.mutate();
  current.result.current.setUser({
    id: "",
    email: "",
    nick: "",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  });
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy()).then(
    () => {
      expect(current.result.current.user.email).toEqual("");
    }
  );
});

test("useLogoutMutation 훅이 실패했을 경우.", async () => {
  const current = renderHook(() => useUserStore());
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/logout`,
      (req, res, ctx) => {
        return res(ctx.status(500));
      }
    )
  );
  current.result.current.setUser({
    id: "",
    email: "hello",
    nick: "hello",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  });
  const { result } = renderHook(() => useLogoutMutation(), {
    wrapper: Wrapper,
  });
  result.current.mutate();
  await waitFor(() => expect(result.current.isError).toBeTruthy()).then(() => {
    expect(current.result.current.user.email).toEqual("hello");
  });
});
