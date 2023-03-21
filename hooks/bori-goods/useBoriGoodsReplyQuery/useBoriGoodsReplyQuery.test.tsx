import { waitFor, renderHook } from "@testing-library/react";
import { useBoriGoodsReplyQuery } from "./useBoriGoodsReplyQuery";
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

const initRender = () => {
  const { result } = renderHook(
    () => useBoriGoodsReplyQuery('23', 1),
    {
      wrapper: Wrapper,
    }
  );
  return result;
}


test("useBoriGoodsReplyQuery 정상동작 확인 테스트", async () => {
  const result = initRender();
  await waitFor(() => 
    expect(result.current.isSuccess).toBeTruthy()
  );
  expect(result.current.data?.data[0].email).toBe('junho@naver.com');
});
