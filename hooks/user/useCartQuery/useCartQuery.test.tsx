import { QueryClientProvider, QueryClient } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useCartQuery } from "./useCartQuery";
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

test("useCartQuery 정상동작 확인 테스트", async () => {
  store.dispatch(setUserState({
    id: "23",
    email: "",
    nick: "",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  }))
  const { result } = renderHook(
    () => useCartQuery(),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => expect(result.current.isSuccess).toBe(true)).then(() => {
    const data =  result.current.data || [];
    expect(data[0].bori_goods_name).toEqual(
      "보리 펜"
    );
  });
});

