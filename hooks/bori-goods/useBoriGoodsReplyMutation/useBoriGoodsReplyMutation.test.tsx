
import { useUserStore } from "@/store/user";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useBoriGoodsReplyMutation } from "./useBoriGoodsReplyMutation";
const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useBoriGoodsReplyMutation 정상동작 확인 테스트", async () => {
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
    () => useBoriGoodsReplyMutation('23'),
    {
      wrapper: Wrapper,
    }
  );
  result.current.mutate('gogo_jose');
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});
