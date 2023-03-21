import { waitFor, renderHook } from "@testing-library/react";
import { useLikeGoodsMutation } from "./useLikeGoodsMutation";
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

test("useLikeGoodsMutation 정상동작 확인 테스트(좋아요)", async () => {
  const { result } = renderHook(
    () => useLikeGoodsMutation('23', '12414', 'like'),
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
    () => useLikeGoodsMutation('23', '12414', undefined),
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

