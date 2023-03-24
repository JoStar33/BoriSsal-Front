
import { useUserStore } from "@/store/user";
import { render, renderHook, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import UserPage from "./index.page";

const queryClient = new QueryClient();


const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <UserPage />
    </QueryClientProvider>
  );
}
test("UserPage 화면 테스트", () => {
  initRender();
  const textCheck = screen.getByText("회원 이메일:");
  expect(textCheck).toBeInTheDocument();
});

test("UserPage 스토어 데이터 반영 테스트", async () => {
  const current = renderHook(() => useUserStore());
  current.result.current.setUser({
    id: "123543",
    email: "rhwd12@fasdgf.sdfa",
    nick: "dsa",
    sns_id: "asdg",
    profile_image: "",
    user_role: 0,
    created_at: new Date(),
    user_bori_goods_like: [],
    user_bori_gallery_like: [],
  });
  initRender();
  const textCheck = await screen.findByText(/rhwd12@fasdgf.sdfa/);
  expect(textCheck).toBeInTheDocument();
});