
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useBoriGoodsQuery } from "./useBoriGoodsQuery";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const initRender = () => {
  const { result } = renderHook(
    () => useBoriGoodsQuery(),
    {
      wrapper: Wrapper,
    }
  );
  return result;
}


test("useBoriGoodsQuery 정상동작 확인 테스트", async () => {
  const result = initRender();
  await waitFor(() => 
    expect(result.current.isSuccess).toBeTruthy()
  );
  if(!result.current.data)
    return;
  expect(result.current.data[0].bori_goods_name).toBe('보리 티셔츠');
});

