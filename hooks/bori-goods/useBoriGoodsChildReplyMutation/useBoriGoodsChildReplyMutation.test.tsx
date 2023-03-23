import { waitFor, renderHook } from "@testing-library/react";
import { useBoriGoodsChildReplyMutation } from "./useBoriGoodsChildReplyMutation";
import { QueryClientProvider, QueryClient } from "react-query";
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

test("useBoriGoodsChildReplyMutation 정상동작 확인 테스트", async () => {
  store.dispatch(setUserState({
    id: "6525",
    email: "jojo@naver.com",
    nick: "",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  }));
  const { result } = renderHook(
    () => useBoriGoodsChildReplyMutation('23'),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate('gogogogogo_jose');
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});
