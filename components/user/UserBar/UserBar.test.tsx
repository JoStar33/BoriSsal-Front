import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import UserBar from "./UserBar";

const queryClient = new QueryClient();


//이런형태로 중복되는 코드를 위로 빼낼 수 있음.
const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <UserBar user={{
        email: "rhwd12@fasdgf.sdfa",
        nick: "dsa",
        sns_id: "asdg",
        profile_image: "/isin",
        created_at: new Date(),
        user_bori_goods_like: [],
        user_bori_gallery_like: [],
      }} />
    </QueryClientProvider>
  );
};

test("유저의 프로필 사진이 없을 경우", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <UserBar user={{
        email: "rhwd12@fasdgf.sdfa",
        nick: "dsa",
        sns_id: "asdg",
        profile_image: "",
        created_at: new Date(),
        user_bori_goods_like: [],
        user_bori_gallery_like: [],
      }} />
    </QueryClientProvider>
  );
  const nonProfile = screen.getByRole("non_profile");
  expect(nonProfile).toBeInTheDocument();
});

test("유저의 프로필 사진이 있을 경우", async () => {
  initRender();
  const nonProfile = await screen.findByRole("profile");
  expect(nonProfile).toBeInTheDocument();
});
