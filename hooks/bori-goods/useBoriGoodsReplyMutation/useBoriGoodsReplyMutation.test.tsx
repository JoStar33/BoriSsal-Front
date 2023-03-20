import { waitFor, renderHook } from "@testing-library/react";
import { useBoriGoodsReplyMutation } from "./useBoriGoodsReplyMutation";
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

test("useBoriGoodsReplyMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useBoriGoodsReplyMutation('23', 'jojo@naver.com', '6525'),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => {
    result.current.mutate('gogo_jose');
  }).then(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
});
