
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useBoriGalleryReplyQuery } from "./useBoriGalleryReplyQuery";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const initRender = () => {
  const { result } = renderHook(
    () => useBoriGalleryReplyQuery('23'),
    {
      wrapper: Wrapper,
    }
  );
  return result;
}


test("useBoriGalleryReplyQuery 정상동작 확인 테스트", async () => {
  const result = initRender();
  await waitFor(() => 
    expect(result.current.isSuccess).toBeTruthy()
  );
  expect(result.current.data?.data[0].email).toBe('junho@naver.com');
});
