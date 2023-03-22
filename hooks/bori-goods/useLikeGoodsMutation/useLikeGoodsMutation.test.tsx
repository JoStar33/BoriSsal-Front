import { waitFor, renderHook } from "@testing-library/react";
import { useLikeGoodsMutation } from "./useLikeGoodsMutation";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/store";
import { setUserState } from "@/store/user";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  store.dispatch(setUserState({
    id: "6525",
    email: "",
    nick: "",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  }));
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

test("useLikeGoodsMutation 정상동작 확인 테스트(좋아요)", async () => {
  const { result } = renderHook(
    () => useLikeGoodsMutation('23'),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => {
    result.current.mutate();
  }).then(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
});

test("useLikeGoodsMutation 정상동작 확인 테스트(좋아요 취소)", async () => {
  const { result } = renderHook(
    () => useLikeGoodsMutation('23'),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => {
    result.current.mutate();
  }).then(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
});

