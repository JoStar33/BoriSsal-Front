import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useDeleteCartMutation } from "./useDeleteCartMutation";
import { store } from "@/store";
import { setUserState } from "@/store/user";
import { Provider } from "react-redux";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

test("useDeleteCartMutation 훅 테스트", async () => {
  store.dispatch(
    setUserState({
      id: "23",
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
  const { result } = renderHook(
    () =>
      useDeleteCartMutation('23'),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});
