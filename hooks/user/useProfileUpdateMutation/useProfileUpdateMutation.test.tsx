
import { server } from "@/mocks/server";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useProfileUpdateMutation } from "./useProfileUpdateMutation";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useProfileUpdateMutation 정상동작 확인 테스트", async () => {
  const { result } = renderHook(
    () => useProfileUpdateMutation(),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate(new FormData());
  await waitFor(() => result.current.isSuccess);
});


test("useProfileUpdateMutation 실패 케이스", async () => {
  server.use(
    rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/user/profile-image`, (req, res, ctx) => {
      return res(
        ctx.status(500)
      );
    })
  );
  const { result } = renderHook(
    () => useProfileUpdateMutation(),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate(new FormData());
  await waitFor(() => result.current.isError);
});
