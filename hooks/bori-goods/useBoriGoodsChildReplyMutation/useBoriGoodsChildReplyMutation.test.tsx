
import { useUserStore } from "@/store/user";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useBoriGoodsChildReplyMutation } from "./useBoriGoodsChildReplyMutation";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useBoriGoodsChildReplyMutation 정상동작 확인 테스트", async () => {
  const current = renderHook(() => useUserStore());
  current.result.current.setUser({
    id: "6525",
    email: "jojo@naver.com",
    nick: "",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  });
  const { result } = renderHook(
    () => useBoriGoodsChildReplyMutation('23'),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate('gogogogogo_jose');
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});
