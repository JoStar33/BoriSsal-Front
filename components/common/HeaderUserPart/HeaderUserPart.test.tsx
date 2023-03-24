import { useUserStore } from "@/store/user";
import { render, renderHook, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import HeaderUserPart from "./HeaderUserPart";

const queryClient = new QueryClient();

test('헤더 영역 화면 분기 테스트', async () => {
  const current = renderHook(() => useUserStore());
  current.result.current.setUser({
    id: "2137943",
    email: "rhrhr",
    nick: "호스스",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  });
  render(
    <QueryClientProvider client={queryClient}>
      <HeaderUserPart/>
    </QueryClientProvider>);
  const emailText = await screen.findByText(/호스스/);
  expect(emailText).toBeInTheDocument();
});

test('헤더 영역 화면 분기 테스트', async () => {
  const current = renderHook(() => useUserStore());
  current.result.current.setUser({
    id: "",
    email: "rhrhr",
    nick: "호스스",
    sns_id: "",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: []
  });
  render(
    <QueryClientProvider client={queryClient}>
      <HeaderUserPart/>
    </QueryClientProvider>);
  const loginText = await screen.findByText(/Login/);
  expect(loginText).toBeInTheDocument();
});