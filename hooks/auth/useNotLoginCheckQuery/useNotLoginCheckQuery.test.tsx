import { waitFor, renderHook } from "@testing-library/react";
import { useNotLoginCheckQuery } from "./useNotLoginCheckQuery";
import { QueryClientProvider, QueryClient } from "react-query";
import { setUserState } from "@/store/user";
import { Provider } from "react-redux";
import { store } from "@/store";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {children}
      </Provider>
    </QueryClientProvider>
  );
};

test("useNotLoginCheckQuery 훅 테스트(성공)", async () => {
  const { result } = renderHook(() => useNotLoginCheckQuery(), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
  expect(result.current.isSuccess).toBeTruthy();
});

test("useNotLoginCheckQuery훅 테스트(독특한 케이스로 만약 스토어에 유저정보가 있는 상태라면)", async () => {
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
  const { result } = renderHook(() => useNotLoginCheckQuery(), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
  expect(store.getState().userStore.user.email).toBe('');
})
