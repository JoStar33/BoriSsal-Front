
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useBoriGoodsReplyQuery } from "./useBoriGoodsReplyQuery";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
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
  expect(result.current.data?.bori_goods_reply[0].email).toBe('junho@naver.com');
});
