import { server } from "@/mocks/server";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useBoriGalleryImageMutation } from "./useBoriGalleryImageMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useBoriGalleryImageMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useBoriGalleryImageMutation('23'),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate(new FormData);
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});

test("useBoriGalleryImageMutation 실패케이스 확인 테스트", async () => {
  server.use(
    rest.patch(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-gallery/image/23`, (req, res, ctx) => {
      return res(
        ctx.status(500)
      )
    })
  );
  const { result } = renderHook(
    () => useBoriGalleryImageMutation('23'),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate(new FormData);
  await waitFor(() => expect(result.current.isError).toBeTruthy());
});
