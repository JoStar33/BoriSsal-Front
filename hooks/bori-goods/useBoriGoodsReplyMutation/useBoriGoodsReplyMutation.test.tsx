import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useBoriGoodsReplyMutation } from "./useBoriGoodsReplyMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useBoriGoodsReplyMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useBoriGoodsReplyMutation("jojo@naver.com", '23'),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate('gogo_jose');
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});
