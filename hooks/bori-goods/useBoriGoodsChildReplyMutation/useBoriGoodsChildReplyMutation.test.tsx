import { waitFor, renderHook } from "@testing-library/react";
import { useBoriGoodsChildReplyMutation } from "./useBoriGoodsChildReplyMutation";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/store";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

test("useBoriGoodsChildReplyMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useBoriGoodsChildReplyMutation('23', 'jojo@naver.com', '6525'),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => {
    result.current.mutate('gogogogogo_jose');
  }).then(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
});
