
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useBoriGalleryQuery } from "./useBoriGalleryQuery";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const initRender = () => {
  const { result } = renderHook(
    () => useBoriGalleryQuery(),
    {
      wrapper: Wrapper,
    }
  );
  return result;
}


test("useBoriGalleryQuery 정상동작 확인 테스트", async () => {
  const result = initRender();
  await waitFor(() => 
    expect(result.current.isSuccess).toBeTruthy()
  );
  if(!result.current.data)
    return;
  expect(result.current.data[0].bori_gallery_title).toBe('제하하하');
});

