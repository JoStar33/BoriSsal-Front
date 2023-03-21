import { server } from "@/mocks/server";
import { rest } from "msw";
import { useLoginCheckQuery } from "./useLoginCheckQuery";
import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { setUserState } from "@/store/user";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

test("useLoginCheckQuery 훅 테스트(성공)", async () => {
  const { result } = renderHook(() => useLoginCheckQuery(), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
  expect(result.current.isSuccess).toBeTruthy();
});

test("useLoginCheckQuery 훅 테스트(실패 케이스)", async () => {
  store.dispatch(
    setUserState({
      id: "2421424325325",
      email: "",
      nick: "",
      sns_id: "",
      profile_image: "",
      user_role: 0,
      created_at: new Date(),
      user_bori_goods_like: [],
      user_bori_gallery_like: [],
    })
  );
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/is-login`,
      (req, res, ctx) => {
        return res(ctx.status(400));
      }
    )
  );
  renderHook(() => useLoginCheckQuery(), {
    wrapper: Wrapper,
  });
  const state = store.getState().userStore;
  setTimeout(() => {
    expect(state.user.id.length).toBe(0);
  }, 3000);
});
