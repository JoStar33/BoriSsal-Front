
import { useUserStore } from "@/store/user";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useCartQuery } from "./useCartQuery";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("useCartQuery 정상동작 확인 테스트", async () => {
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
  })
  const { result } = renderHook(
    () => useCartQuery(),
    {
      wrapper: Wrapper,
    }
  );
  await waitFor(() => expect(result.current.isSuccess).toBe(true)).then(() => {
    const data =  result.current.data || [];
    expect(data[0].bori_goods_name).toEqual(
      "보리 펜"
    );
  });
});

