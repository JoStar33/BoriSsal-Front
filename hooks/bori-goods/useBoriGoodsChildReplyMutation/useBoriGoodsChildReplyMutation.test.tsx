import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useBoriGoodsChildReplyMutation } from "./useBoriGoodsChildReplyMutation";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useBoriGoodsChildReplyMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useBoriGoodsChildReplyMutation('jojo@naver.com', "23"),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate('gogogogogo_jose');
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});
