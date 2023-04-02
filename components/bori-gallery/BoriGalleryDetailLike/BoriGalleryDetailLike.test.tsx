import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import BoriGalleryDetailLike from "./BoriGalleryDetailLike";
import { SetStateAction } from "react";

const user = userEvent.setup();

const queryClient = new QueryClient();

const setState = jest.fn() as any;

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <BoriGalleryDetailLike 
        validateText={setState}
        setValidateDialog={setState}
        user={{
          email: "rhrhr@naver.com",
          nick: "hihi",
          sns_id: "wr",
          profile_image: "/none",
          created_at: new Date(),
          user_bori_goods_like: [],
          user_bori_gallery_like: ["234"],
        }} 
        gallery={{
          _id: '234',
          bori_gallery_title: '제하하하',
          bori_gallery_desc: '크로우즈',
          bori_gallery_like: 3,
          bori_gallery_image: '/none',
          created_at: new Date()
        }} />
    </QueryClientProvider>
  )
};

test('BoriGalleryDetailLike 좋아요 버튼을 누를시 (로그인 이후)', async () => {
  initRender();
  const likeButton = screen.getByRole("like");
  const likeHeart = screen.getByRole("like-heart");
  const heartStyle = getComputedStyle(likeHeart);
  await user.click(likeButton).then(() => {
    expect(heartStyle.color).toBe('red');
  });
});