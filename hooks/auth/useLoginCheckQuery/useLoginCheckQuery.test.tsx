import { server } from "@/mocks/server";
import { useUserStore } from "@/store/user";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { useLoginCheckQuery } from "./useLoginCheckQuery";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useLoginCheckQuery 훅 테스트(성공)", async () => {
  const { result } = renderHook(() => useLoginCheckQuery(), {
    wrapper: Wrapper,
  });
  await waitFor(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
  expect(result.current.isSuccess).toBeTruthy();
});

test("useLoginCheckQuery 훅 테스트(실패 케이스)", async () => {
  const current = renderHook(() => useUserStore());
  current.result.current.setUser({
    id: "gsfdgfdsgfd",
    email: "",
    nick: "",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  });
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/is-login`,
      (req, res, ctx) => {
        return res(ctx.status(400));
      }
    )
  );
  renderHook(() => useLoginCheckQuery(), {
    wrapper: Wrapper,
  });
  setTimeout(() => {
    expect(current.result.current.user.id).toBe(0);
  }, 3000);
});
