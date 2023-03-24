
import { useUserStore } from "@/store/user";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useLikeGoodsMutation } from "./useLikeGoodsMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useLikeGoodsMutation 정상동작 확인 테스트(좋아요)", async () => {
  const current = renderHook(() => useUserStore());
  current.result.current.setUser({
    id: "23",
    email: "",
    nick: "",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  });
  const { result } = renderHook(
    () => useLikeGoodsMutation('23'),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => {
    result.current.mutate();
  }).then(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
});

test("useLikeGoodsMutation 정상동작 확인 테스트(좋아요 취소)", async () => {
  const current = renderHook(() => useUserStore());
  current.result.current.setUser({
    id: "23",
    email: "",
    nick: "",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  });
  const { result } = renderHook(
    () => useLikeGoodsMutation('23'),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => {
    result.current.mutate();
  }).then(() => {
    expect(result.current.isSuccess).toBeTruthy();
  });
});

