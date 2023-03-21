import { waitFor, renderHook } from "@testing-library/react";
import { useLogoutMutation } from "./useLogoutMutation";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/store";
import { setUserState } from "@/store/user";
import { server } from "@/mocks/server";
import { rest } from "msw";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
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
  store.dispatch(
    setUserState({
      id: "11111",
      email: "hello",
      nick: "hello",
      sns_id: "hello",
      profile_image: "hello",
      user_role: 0,
      created_at: new Date(),
      user_bori_goods_like: [],
      user_bori_gallery_like: [],
    })
  );
  const { result } = renderHook(() => useLogoutMutation(), {
    wrapper: Wrapper,
  });
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy()).then(
    () => {
      const state = store.getState().userStore;
      expect(state.user.email).toEqual("");
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
  store.dispatch(
    setUserState({
      id: "11111",
      email: "hello",
      nick: "hello",
      sns_id: "hello",
      profile_image: "hello",
      user_role: 0,
      created_at: new Date(),
      user_bori_goods_like: [],
      user_bori_gallery_like: [],
    })
  );
  const { result } = renderHook(() => useLogoutMutation(), {
    wrapper: Wrapper,
  });
  result.current.mutate();
  await waitFor(() => expect(result.current.isError).toBeTruthy()).then(() => {
    const state = store.getState().userStore;
    expect(state.user.email).toEqual("hello");
  });
});
