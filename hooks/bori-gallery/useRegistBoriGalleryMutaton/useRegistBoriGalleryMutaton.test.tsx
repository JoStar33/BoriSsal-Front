import { server } from "@/mocks/server";
import { IPostBoriGallery } from "@/types/boriGallery";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRegistBoriGalleryMutaton } from "./useRegistBoriGalleryMutaton";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const setState = jest.fn() as any;

const initPostBoriGallery: IPostBoriGallery = {
  bori_gallery_title: '', 
  bori_gallery_desc: ''
};

test("useRegistBoriGalleryMutaton 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useRegistBoriGalleryMutaton(initPostBoriGallery, new FormData, setState, setState, setState, setState, setState, setState),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});


test("useRegistBoriGalleryMutaton 실패케이스 확인 테스트", async () => {
  server.use(
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-gallery`, (req, res, ctx) => {
      return res(
        ctx.status(500)
      )
    })
  );
  const { result } = renderHook(
    () => useRegistBoriGalleryMutaton(initPostBoriGallery, new FormData, setState, setState, setState, setState, setState, setState),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isError).toBeTruthy());
});