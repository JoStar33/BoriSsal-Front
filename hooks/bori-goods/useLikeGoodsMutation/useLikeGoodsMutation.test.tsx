import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useLikeGoodsMutation } from "./useLikeGoodsMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useLikeGoodsMutation 정상동작 확인 테스트(좋아요)", async () => {
  const { result } = renderHook(
    () => useLikeGoodsMutation([], '23'),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});

test("useLikeGoodsMutation 정상동작 확인 테스트(좋아요 취소)", async () => {
  const { result } = renderHook(
    () => useLikeGoodsMutation([], '23'),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});

