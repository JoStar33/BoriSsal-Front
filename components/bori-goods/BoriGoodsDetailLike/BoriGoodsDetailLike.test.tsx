import StatusContainer from "@/components/common/StatusContainer/StatusContainer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import BoriGoodsDetailLike from "./BoriGoodsDetailLike";

const user = userEvent.setup();

const queryClient = new QueryClient();

const setState = jest.fn() as any;

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <StatusContainer/>
      <BoriGoodsDetailLike 
        user={{
          email: "rhrhr@naver.com",
          nick: "hihi",
          sns_id: "wr",
          profile_image: "/none",
          created_at: new Date(),
          user_bori_goods_like: ["234"],
          user_bori_gallery_like: [],
        }} goods={{
          _id: "234",
          category_id: "123", 
          bori_goods_like: 2, 
          bori_goods_image: "/none", 
          bori_goods_name: "jojo",
          bori_goods_price: 0,
          bori_goods_stock: 0,
          bori_goods_desc: "jojo",
          created_at: new Date(),
        }}        
      />
    </QueryClientProvider>
  )
};

test('좋아요 버튼을 누를시 (로그인 이후)', async () => {
  initRender();
  const likeButton = screen.getByRole("like");
  const likeHeart = screen.getByRole("like-heart");
  const heartStyle = getComputedStyle(likeHeart);
  await user.click(likeButton).then(() => {
    expect(heartStyle.color).toBe('red');
  });
});