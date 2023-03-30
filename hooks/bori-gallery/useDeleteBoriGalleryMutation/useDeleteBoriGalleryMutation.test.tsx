import { server } from "@/mocks/server";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDeleteBoriGalleryMutation } from "./useDeleteBoriGalleryMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const setState = jest.fn() as any;

test("useDeleteBoriGalleryMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useDeleteBoriGalleryMutation('23', setState, setState, setState, setState),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});


test("useDeleteBoriGalleryMutation 정상동작 확인 테스트", async () => {
  server.use(
    rest.delete(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/bori-gallery/23`, (req, res, ctx) => {
      return res(
        ctx.status(500)
      )
    })
  );
  const { result } = renderHook(
    () => useDeleteBoriGalleryMutation('23', setState, setState, setState, setState),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate();
  await waitFor(() => expect(result.current.isError).toBeTruthy());
});